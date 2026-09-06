# STANCOMB — Technology & Systems

Website institucional e comercial da STANCOMB.

**From Compass to Code.**

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion

## Executar localmente

```bash
cd stancomb
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Configuração

Copie `.env.example` para `.env.local` e preencha quando os contatos oficiais estiverem disponíveis:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_WHATSAPP` (apenas dígitos, com DDI)
- `NEXT_PUBLIC_LINKEDIN`

Contatos vazios não inventam números ou endereços. O botão de WhatsApp leva ao formulário até o número ser configurado.

## Deploy

O projeto está preparado para a Vercel. Defina as variáveis de ambiente no painel antes de publicar.
