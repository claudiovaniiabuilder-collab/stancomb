import { NextResponse } from "next/server";
import { parseLead } from "@/lib/leads";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { name: "JSON inválido." } },
      { status: 400 },
    );
  }

  const parsed = parseLead(body);

  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, errors: parsed.errors },
      { status: 400 },
    );
  }

  // Preparado para persistência futura (Supabase).
  // Nesta versão, a validação confirma o lead e retorna sucesso.
  return NextResponse.json({ ok: true });
}
