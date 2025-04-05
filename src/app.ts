import "dotenv/config";
import fastify from "fastify";
import horoscopeRoutes from "./routes/hosroscopeRoutest.js";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, { origin: "*" });
app.get("/", (_, reply) => {
  reply.send({ test: "Ping" });
});

app.register(horoscopeRoutes);
app.listen({ port: 8080, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port 8080`);
});

export default app;
