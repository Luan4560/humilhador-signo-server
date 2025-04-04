import { FastifyInstance } from "fastify";
import { getHoroscope } from "../controllers/horoscopeController.js";
import { validateInput } from "../middleware/validateInput.js";

export default async function horoscopeRoutes(fastify: FastifyInstance) {
  fastify.post("/api/horoscope", { preHandler: validateInput }, getHoroscope);
}
