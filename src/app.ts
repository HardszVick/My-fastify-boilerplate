import app from "./infra/http";

const main = async () => {
  app.listen({ port: 3000, host: "0.0.0.0" });
};

main();
