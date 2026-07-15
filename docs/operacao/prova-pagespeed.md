# Como fazer o print do PageSpeed

## Resposta curta

**Não precisa da tela inteira do navegador.**  
Capture a **faixa das 4 notas** (os círculos: Performance, Acessibilidade, Boas práticas, SEO), de preferência no modo **Celular**, com a **URL** aparecendo em cima.

Isso cabe bem no PDF e no WhatsApp. O resto do relatório (lista eterna de auditorias) **não** precisa ir no print — você resume em bullets no PDF.

```
┌─────────────────────────────────────┐
│  pagespeed.web.dev  ·  [URL]        │  ← incluir
│  [ Celular ]  Computador            │
│                                     │
│   99   100   100   100              │  ← o essencial
│   Perf  A11y  Boas  SEO             │
│                                     │
└─────────────────────────────────────┘
         ↑ recorte até aqui basta
```

## Passo a passo

1. Abra https://pagespeed.web.dev/
2. Cole a URL e analise
3. Selecione **Celular**
4. Role só até ver as **4 métricas em círculo**
5. Print / recorte **dessa região** (não scroll longo da página)
6. No PDF: legenda + data + “Mobile”

## Quando fazer 2 prints

- **Diagnóstico do cliente:** 1 print mobile das notas (e, se quiser, desktop — opcional).
- **Prova da Marca Digital:** mesmo formato, URL `marcadigital.dev.br`, legenda *“Padrão técnico — PageSpeed Mobile”*.

## Evitar

- Print de monitor inteiro com barras laterais
- Página inteira rolando 10 mil pixels de auditoria
- Print sem URL (fica sem contexto)
