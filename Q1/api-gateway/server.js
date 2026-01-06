const express = require("express");
const proxy = require("express-http-proxy");
const app = express();

app.use("/auth", proxy("http://localhost:4001"));
app.use("/users", proxy("http://localhost:4002"));
app.use("/doctors", proxy("http://localhost:4003"));
app.use("/appointments", proxy("http://localhost:4004"));


app.get("/health", (_, res) => res.send("Gateway OK"));

app.listen(4000, () => console.log("API Gateway on 4000"));
