import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud no válida." }, { status: 400 });
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, message: "Revisa los campos del formulario.", fieldErrors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Honeypot: si el campo trampa viene relleno, se descarta silenciosamente
  // pero se responde 200 para no delatar el mecanismo anti-spam a un bot.
  if (result.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { firstName, lastName, company, email, reason, message } = result.data;

  // TODO: conectar un proveedor de envío de correo (por ejemplo Resend, SendGrid
  // o SMTP) para reenviar esta consulta al correo corporativo. De momento se
  // registra en el log del servidor para no perder la solicitud.
  console.info("[contacto] Nueva consulta", {
    firstName,
    lastName,
    company,
    email,
    reason,
    message,
  });

  return NextResponse.json({ ok: true });
}
