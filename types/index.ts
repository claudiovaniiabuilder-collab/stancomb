export type ToolOption =
  | "excel"
  | "whatsapp"
  | "email"
  | "papel"
  | "erp"
  | "outro";

export type LeadPayload = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  segment: string;
  process: string;
  currentState?: string;
  tools: ToolOption[];
};

export type FieldErrors = Partial<Record<keyof LeadPayload, string>>;
