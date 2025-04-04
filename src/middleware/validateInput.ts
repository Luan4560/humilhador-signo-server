import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from "fastify";
import { request } from "http";

export const validateInput = (
  request: FastifyRequest<{ Body: HoroscopeRequest }>,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const { name, sign } = request.body;
  if (!name || !sign) {
    reply.code(400).send({ error: "Nome e signo são obrigatórios " });
    return;
  }

  done();
};
