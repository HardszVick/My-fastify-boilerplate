import { FastifyInstance } from "fastify";
import pingHandler from "./ping/handler/ping.handler";

const V1Routes = async (app: FastifyInstance) => {
  app.get("/ping", pingHandler);
};

export default V1Routes;
