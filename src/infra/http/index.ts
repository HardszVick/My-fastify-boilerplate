import { fastify } from "fastify";
import routes from "./routes";

const app = fastify({ logger: true });

/* Routes */
app.register(routes);

export default app;
