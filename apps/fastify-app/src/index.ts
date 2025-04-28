import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async (request, reply) => {
  return { message: "Hello from Fastify + TypeScript!" };
});

fastify.listen({ port: 3002 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Fastify app listening at ${address}`);
});
