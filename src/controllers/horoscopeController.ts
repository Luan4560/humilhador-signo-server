import { FastifyRequest, FastifyReply } from "fastify";
import { getSarcasticHoroscope } from "../services/horoscopeService.js";

export const getHoroscope = async (
  request: FastifyRequest<{ Body: HoroscopeRequest }>,
  reply: FastifyReply
) => {
  const { name, sign } = request.body;
  const message = await getSarcasticHoroscope(name, sign);

  return reply.send({ message });
};
