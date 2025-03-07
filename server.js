import { createRequestHandler } from "@remix-run/express";
import express from "express";
import { installGlobals } from "@remix-run/node";
import http from "http"
installGlobals();
import { Server } from "socket.io";
import compression from "compression";
import connect from "./Model/connection.js";

const { Student, Room } = connect();

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const remixHandler = createRequestHandler({
  build: viteDevServer
    ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
    : await import("./build/server/index.js"),
});

const app = express();
const port = process.env.PORT || 5174;
// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  // Vite fingerprints its assets so we can cache forever.
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" })
  );
}
app.use(compression())
app.all("*", remixHandler);

app.post("/create-link", (req, res) => {
  const { ...rest } = req.body;

  Room.create({
    roomId: crypto.randomUUID(),
    ...rest,
  })
    .then((docs) => {
      console.log(docs);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
const server = http.createServer(app)
const io = new Server(server, {
  connectTimeout: 30000,
  // path:"/"
});
