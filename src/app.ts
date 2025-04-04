import fastify from "fastify";
import "dotenv/config";
import horoscopeRoutes from "./routes/hosroscopeRoutest.js";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, { origin: "https://humilhador-signos.vercel.app" });
app.get("/", (_, reply) => {
  reply.send({ test: "Ping" });
});

app.register(horoscopeRoutes);
app.listen({ port: 8080, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port 8080`);
});

export default app;
