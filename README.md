# DisneyTrip

Projeto full-stack para visualizar, selecionar e simular a compra de pacotes completos de viagem à Disney. O app utiliza dados mockados localmente e oferece um fluxo de seleção de hospedagem, ingressos e carro, com um resumo/checkout fictício.

## Visão Geral
- Frontend em React + TypeScript com Vite e Tailwind CSS.
- Backend simples em Node/Express para simular APIs (porta `3001`).
- Estado global de carrinho com `CartContext` (persistência planejada em `localStorage`).
- Páginas: Home, Pacotes, Acomodações, Carros, Ingressos, Carrinho.
- UI com cabeçalho transparente, ícones (lucide-react) e animações sutis.

## Tecnologias
- Frontend: `React`, `TypeScript`, `Vite`, `React Router`, `Tailwind CSS`, `react-hot-toast`, `lucide-react`.
- Backend: `Node.js` + `Express`.

## Estrutura do Projeto
```
DisneyStff/
├─ backend/
│  ├─ server.js
│  ├─ package.json
│  └─ package-lock.json
└─ frontend/
   ├─ index.html
   ├─ package.json
   ├─ src/
   │  ├─ App.tsx
   │  ├─ main.tsx
   │  ├─ index.css
   │  ├─ context/
   │  │  └─ CartContext.tsx
   │  ├─ components/
   │  │  ├─ Header.tsx
   │  │  ├─ PackageCard.tsx
   │  │  └─ TicketCard.tsx
   │  ├─ pages/
   │  │  ├─ Home.tsx/tsx
   │  │  ├─ Packages.tsx
   │  │  ├─ Accomodations.tsx (ver nota abaixo)
   │  │  ├─ Cars.tsx
   │  │  ├─ Tickets.tsx
   │  │  └─ Cart.tsx
   │  ├─ data/
   │  │  └─ mockData.ts
   │  ├─ lib/
   │  │  └─ lumi.ts (stub opcional)
   │  └─ types/
   ├─ tailwind.config.js
   ├─ tsconfig.json
   └─ vite.config.js
```

> Nota: em `App.tsx` a rota importa `./pages/Accomodations`. Se o arquivo estiver nomeado como `Accommodations.tsx`, padronizar ambos.

## Como Rodar
### Pré-requisitos
- Node.js 18+.
- NPM (ou PNPM/Yarn).

### Backend
```bash
cd backend
npm install
npm run start  # inicia servidor na porta 3001
```

### Frontend
```bash
cd frontend
npm install
npm run dev     # inicia Vite em http://localhost:5173
```

## Scripts Úteis
- Frontend:
  - `npm run dev`: servidor de desenvolvimento.
  - `npm run build`: build de produção.
  - `npm run preview`: servidor estático para checar o build.
- Backend:
  - `npm run start`: inicia API mock.

## Funcionalidades
- Visualizar pacotes e itens (hospedagem, ingressos, carro).
- Adicionar ao carrinho com feedback visual (toasts).
- Cabeçalho com ícones e badge de quantidade usando `CartContext`.
- Animações de entrada (hero e botões) e gradientes no tema “Magia Noturna”.

## Roadmap (Próximos Passos)
- Configurador de pacotes guiado por etapas (Hospedagem → Ingressos → Carro → Resumo).
- Checkout simulado com formulário e tela de confirmação.
- Cálculo completo: impostos/taxas, cupom, parcelamento, sazonalidade.
- Persistência do carrinho em `localStorage`.
- Validações (datas, viajantes, campos obrigatórios).
- Testes de preços e smoke tests do fluxo principal.

## Deploy
- Frontend:
  ```bash
  cd frontend
  npm run build
  npm run preview
  ```
- Backend: hospedar `server.js` em um serviço simples (Railway, Render, etc.) ou rodar localmente.

## Licença
Projeto para fins educacionais/demonstração. Adicione uma licença (MIT, Apache-2.0, etc.) conforme necessário.
