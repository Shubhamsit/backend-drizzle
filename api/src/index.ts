import express from "express";
import type { Request, Response } from "express";
import productRouter from "./routes/products/productRoutes.js";

const app = express();

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log("hello");
});
