# Portfólio — Josiane Gonçalves

Portfólio profissional de Josiane Gonçalves, Desenvolvedora de Software Júnior. A experiência combina uma interface de jogo/HUD com evidências de engenharia de software, trajetória profissional, formação, certificações e projetos.

Produção: [josiane-goncalves-portfolio.vercel.app](https://josiane-goncalves-portfolio.vercel.app/)

## Tecnologias

- React
- TypeScript
- Vite
- i18next
- Tailwind CSS
- Vitest
- React Testing Library

## Módulos

- identidade e apresentação profissional;
- Character Stage com Josiane e A.L.I.A.;
- System Status;
- Mission Files;
- Engineering Matrix;
- Engineering Log;
- Engineering Process;
- formações e certificações;
- soft skills;
- canais de contato;
- interface em português e inglês.

## Desenvolvimento local

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

## Validação

```bash
npm test -- --run
npm run build
git diff --check
```

O build de produção é gerado em `dist/`.

## Estrutura principal

```text
src/
├── app/          # composição da aplicação
├── assets/       # assets visuais utilizados pelo produto
├── components/   # componentes compartilhados
├── data/         # dados profissionais e dos projetos
├── features/     # módulos do portfólio
├── i18n/         # traduções PT/EN
├── styles/       # tokens, movimento e estilos globais
└── test/         # configuração global dos testes
```

## Acessibilidade

A aplicação inclui landmarks semânticos, link para pular ao conteúdo, navegação por teclado, foco visível, rótulos acessíveis e suporte a `prefers-reduced-motion` sem ocultar conteúdo.

## Contato

- GitHub: [Josiane-Goncalves](https://github.com/Josiane-Goncalves)
- LinkedIn: [josianecgoncalves](https://www.linkedin.com/in/josianecgoncalves)
- E-mail: [josypropy@gmail.com](mailto:josypropy@gmail.com)
