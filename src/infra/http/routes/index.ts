import { FastifyInstance } from "fastify";
import V1Routes from "./v1";

const routes = async (app: FastifyInstance) => {
  app.register(V1Routes);
};

export default routes;
