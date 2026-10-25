# Despesas AI

MVP funcional de gestão de despesas pessoais, com dashboard responsive, dados demo, captura de recibos, OCR no browser (Tesseract.js) e interpretação estruturada via OpenAI.

## Stack
- Next.js + React + TypeScript
- Tesseract.js para OCR local no browser
- OpenAI API para interpretação do texto OCR
- Supabase/Postgres para persistência e autenticação (schema incluído)
- Recharts para analytics

## Arranque
1. `npm install`
2. Copiar `.env.example` para `.env.local` e preencher as variáveis.
3. Criar um projeto Supabase e executar `supabase/schema.sql` no SQL Editor.
4. `npm run dev`

Sem `OPENAI_API_KEY`, a aplicação continua a permitir testar o fluxo de OCR e revisão, mas devolve um resultado de fallback. Para produção, ligar autenticação Supabase, Storage privado para recibos e persistência da confirmação na API `/api/expenses`.

## Próximos passos de produção
- autenticação Supabase e RLS já preparado no schema;
- upload privado de recibos para Supabase Storage;
- endpoint transacional para guardar Expense + ReceiptItems;
- páginas Despesas, Relatórios, Orçamentos, Estabelecimentos e Definições;
- pesquisa NL com consultas SQL seguras e grounding exclusivo nos dados do utilizador;
- validação de totais/IVA e scores de confiança;
- exportação CSV/XLSX/PDF.
