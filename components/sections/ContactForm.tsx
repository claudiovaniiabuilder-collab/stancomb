"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { validateLead } from "@/lib/leads";
import { cn } from "@/lib/utils";
import type { FieldErrors, LeadPayload, ToolOption } from "@/types";

const initial: LeadPayload = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  segment: "",
  process: "",
  tools: [],
};

export function ContactForm({ copy }: { copy: Dictionary["contact"] }) {
  const [form, setForm] = useState<LeadPayload>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  function update<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleTool(tool: ToolOption) {
    setForm((current) => ({
      ...current,
      tools: current.tools.includes(tool)
        ? current.tools.filter((item) => item !== tool)
        : [...current.tools, tool],
    }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(form, copy.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("ok");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  const toolKeys = Object.keys(copy.tools) as ToolOption[];

  return (
    <section id="contato" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            titleLine2={copy.titleLine2}
            description={copy.description}
          />
        </Reveal>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-5 border border-white/16 bg-card p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                id="name"
                label={copy.name}
                value={form.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
              />
              <Field
                id="company"
                label={copy.company}
                value={form.company}
                error={errors.company}
                onChange={(value) => update("company", value)}
              />
              <Field
                id="email"
                label={copy.email}
                type="email"
                autoComplete="email"
                value={form.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
              />
              <Field
                id="whatsapp"
                label={copy.whatsapp}
                autoComplete="tel"
                value={form.whatsapp}
                error={errors.whatsapp}
                onChange={(value) => update("whatsapp", value)}
              />
            </div>
            <div>
              <label htmlFor="segment" className="mb-2 block text-sm">
                {copy.segment}
              </label>
              <select
                id="segment"
                value={form.segment}
                onChange={(event) => update("segment", event.target.value)}
                className={inputClass(Boolean(errors.segment))}
                aria-invalid={Boolean(errors.segment)}
              >
                <option value="">{copy.select}</option>
                {copy.segments.map((segment) => (
                  <option key={segment.id} value={segment.id}>
                    {segment.label}
                  </option>
                ))}
              </select>
              {errors.segment ? <ErrorText>{errors.segment}</ErrorText> : null}
            </div>
            <div>
              <label htmlFor="process" className="mb-2 block text-sm">
                {copy.process}
              </label>
              <textarea
                id="process"
                rows={6}
                value={form.process}
                placeholder={copy.placeholder}
                onChange={(event) => update("process", event.target.value)}
                className={inputClass(Boolean(errors.process))}
                aria-invalid={Boolean(errors.process)}
                aria-describedby={errors.process ? "process-error" : undefined}
              />
              {errors.process ? (
                <ErrorText id="process-error">{errors.process}</ErrorText>
              ) : null}
            </div>
            <fieldset>
              <legend className="mb-3 text-sm">{copy.toolsLegend}</legend>
              <div className="flex flex-wrap gap-3">
                {toolKeys.map((tool) => (
                  <label
                    key={tool}
                    className="inline-flex cursor-pointer items-center gap-2 border border-white/18 px-3 py-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={form.tools.includes(tool)}
                      onChange={() => toggleTool(tool)}
                      className="accent-brass"
                    />
                    {copy.tools[tool]}
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-12 items-center justify-center bg-brass px-6 text-ink shadow-[0_0_16px_rgba(196,165,106,0.16)] transition-colors hover:bg-brass-soft disabled:opacity-60"
            >
              {status === "sending" ? copy.sending : copy.submit}
            </button>
            {status === "ok" ? (
              <p className="text-sm text-brass-soft" role="status">
                {copy.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-300" role="alert">
                {copy.error}
              </p>
            ) : null}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(Boolean(error))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <p id={id} className="mt-2 text-sm text-red-300" role="alert">
      {children}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full border bg-background px-3 py-3 text-foreground outline-none placeholder:text-muted/70",
    hasError ? "border-red-400/50" : "border-white/20 focus:border-brass/60",
  );
}
