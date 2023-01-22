import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";
const app = fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 4444,
    host: "192.168.100.7",
  })
  .then(() => {
    console.log("server running ....");
  });

// app.listen({ port: 8000, host: "192.168.100.7" }, function (err, address) {
//   if (err) {
//     console.log("err", err);
//     app.log.error(err);
//     process.exit(1);
//   }
//   console.log(address);
//   app.log.info(`server listening on ${address}`);
// });
