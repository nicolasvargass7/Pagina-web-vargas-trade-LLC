"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { CONTACT_PAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors duration-200 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const formId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
      privacyAccepted: undefined,
      company_website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("submitting");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? "No se pudo enviar tu mensaje.");
      }

      setSubmitState("success");
      reset();
    } catch (error) {
      setSubmitState("error");
      setServerError(error instanceof Error ? error.message : "No se pudo enviar tu mensaje.");
    }
  };

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-success/30 bg-success-bg px-8 py-14 text-center"
      >
        <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-text">Mensaje enviado correctamente</h2>
        <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
          Gracias por escribirnos. Revisaremos tu consulta y te responderemos al correo indicado.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-2 text-sm font-semibold text-primary underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot — oculto para personas, visible para bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>No completar este campo</label>
        <input
          id={`${formId}-website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-firstName`} className="mb-2 block text-sm font-medium text-text">
            Nombre
          </label>
          <input
            id={`${formId}-firstName`}
            type="text"
            autoComplete="given-name"
            className={inputClasses}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p id={`${formId}-firstName-error`} className="mt-2 text-sm text-error">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-lastName`} className="mb-2 block text-sm font-medium text-text">
            Apellido
          </label>
          <input
            id={`${formId}-lastName`}
            type="text"
            autoComplete="family-name"
            className={inputClasses}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p id={`${formId}-lastName-error`} className="mt-2 text-sm text-error">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-company`} className="mb-2 block text-sm font-medium text-text">
          Empresa <span className="font-normal text-text-muted">(opcional)</span>
        </label>
        <input
          id={`${formId}-company`}
          type="text"
          autoComplete="organization"
          className={inputClasses}
          {...register("company")}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="mb-2 block text-sm font-medium text-text">
          Correo electrónico
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          autoComplete="email"
          className={inputClasses}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className="mt-2 text-sm text-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-reason`} className="mb-2 block text-sm font-medium text-text">
          Motivo de contacto
        </label>
        <select
          id={`${formId}-reason`}
          defaultValue=""
          className={cn(inputClasses, "appearance-none bg-no-repeat")}
          aria-invalid={!!errors.reason}
          aria-describedby={errors.reason ? `${formId}-reason-error` : undefined}
          {...register("reason")}
        >
          <option value="" disabled>
            Selecciona un motivo
          </option>
          {CONTACT_PAGE.reasonOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p id={`${formId}-reason-error`} className="mt-2 text-sm text-error">
            {errors.reason.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-sm font-medium text-text">
          Mensaje
        </label>
        <textarea
          id={`${formId}-message`}
          rows={5}
          className={inputClasses}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-border text-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
            aria-invalid={!!errors.privacyAccepted}
            aria-describedby={errors.privacyAccepted ? `${formId}-privacy-error` : undefined}
            {...register("privacyAccepted")}
          />
          <span>
            He leído y acepto la{" "}
            <Link href="/privacidad" className="font-medium text-primary underline underline-offset-2">
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {errors.privacyAccepted && (
          <p id={`${formId}-privacy-error`} className="mt-2 text-sm text-error">
            {errors.privacyAccepted.message}
          </p>
        )}
      </div>

      {submitState === "error" && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-error/30 bg-error-bg px-4 py-3 text-sm text-error"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
