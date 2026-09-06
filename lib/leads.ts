import { pt } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { FieldErrors, LeadPayload, ToolOption } from "@/types";

const TOOL_OPTIONS: ToolOption[] = [
  "excel",
  "whatsapp",
  "email",
  "papel",
  "erp",
  "outro",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseLead(input: unknown):
  | { ok: true; data: LeadPayload }
  | { ok: false; errors: FieldErrors } {
  if (!input || typeof input !== "object") {
    return {
      ok: false,
      errors: { name: "Dados inválidos." },
    };
  }

  const raw = input as Record<string, unknown>;
  const tools = Array.isArray(raw.tools)
    ? raw.tools.filter((tool): tool is ToolOption =>
        TOOL_OPTIONS.includes(tool as ToolOption),
      )
    : [];

  const data: LeadPayload = {
    name: asString(raw.name),
    company: asString(raw.company),
    email: asString(raw.email),
    whatsapp: asString(raw.whatsapp),
    segment: asString(raw.segment),
    process: asString(raw.process),
    currentState: asString(raw.currentState) || asString(raw.process),
    tools,
  };

  const errors = validateLead(data);

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

export function validateLead(
  data: LeadPayload,
  messages: Dictionary["contact"]["errors"] = pt.contact.errors,
): FieldErrors {
  const errors: FieldErrors = {};

  if (data.name.length < 2) {
    errors.name = messages.name;
  }

  if (data.company.length < 2) {
    errors.company = messages.company;
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = messages.email;
  }

  const phoneDigits = data.whatsapp.replace(/\D/g, "");

  if (phoneDigits.length < 10) {
    errors.whatsapp = messages.whatsapp;
  }

  if (!data.segment) {
    errors.segment = messages.segment;
  }

  if (data.process.length < 4) {
    errors.process = messages.process;
  }

  return errors;
}

export const segments = pt.contact.segments.map((segment) => segment.id);

export const toolLabels: Record<ToolOption, string> = {
  excel: "Excel",
  whatsapp: "WhatsApp",
  email: "E-mail",
  papel: "Papel",
  erp: "ERP",
  outro: "Outro sistema",
};
