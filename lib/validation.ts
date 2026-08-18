import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre.")
    .max(60, "El nombre es demasiado largo."),
  lastName: z
    .string()
    .trim()
    .min(2, "Ingresa tu apellido.")
    .max(60, "El apellido es demasiado largo."),
  company: z.string().trim().max(100, "El nombre de empresa es demasiado largo.").optional(),
  email: z.string().trim().min(1, "Ingresa tu correo electrónico.").email("Ingresa un correo electrónico válido."),
  reason: z.enum(
    ["consulta-comercial", "proveedores", "colaboraciones", "atencion-general", "otro"],
    { message: "Selecciona un motivo de contacto." }
  ),
  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres).")
    .max(2000, "El mensaje es demasiado largo."),
  privacyAccepted: z.literal(true, {
    message: "Debes aceptar la política de privacidad para continuar.",
  }),
  company_website: z.string().max(0, "Solicitud no válida.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
