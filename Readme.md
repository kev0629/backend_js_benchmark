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
Accessible at: http://localhost:3001

## Fastify

```
cd apps/fastify-app
npm run dev
```
Accessible at: http://localhost:3002

Benchmarking

This project uses autocannon to benchmark HTTP performance.

Run the benchmarks

Make sure both servers are running in separate terminals.

Then from the root:

```bash
npm run bench:express
```


```bash
npm run bench:fastify
```


