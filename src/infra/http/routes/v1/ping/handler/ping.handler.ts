import { FastifyReply, FastifyRequest } from "fastify";

const pingHandler = async (req: FastifyRequest, rep: FastifyReply) => {
  return rep.code(200).send({ sucess: true, message: "Pong!" });
};

export default pingHandler;
