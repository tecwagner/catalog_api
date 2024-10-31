import express, { Express } from "express";

export const app: Express = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, World!!!");
  });