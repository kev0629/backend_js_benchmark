# Express vs Fastify — Benchmark Monorepo

This project is a TypeScript-based monorepo designed to compare the performance of an **Express** server and a **Fastify** server.

## Project Structure

```
mono-express-fastify/
├── apps/
│ ├── express-app/
│ │ ├── src/index.ts
│ │ ├── tsconfig.json
│ │ └── package.json
│ ├── fastify-app/
│ │ ├── src/index.ts
│ │ ├── tsconfig.json
│ │ └── package.json
├── tsconfig.base.json
├── package.json
└── README.md
```

## Requirements

- Node.js >= 18
- npm >= 7

## Installation

From the root of the project:

```bash
npm install

cd apps/express-app
npm install

cd ../fastify-app
npm install
```

# Running the servers

## Express

```
cd apps/express-app
npm run dev
```
# backend_js_benchmark
