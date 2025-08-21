import { Router } from "express";
import type { Request, Response } from "express";

const productRouter = Router();

productRouter.get("/", (req: Request, res: Response) => {
  console.log("Request received");
  res.send("Hello World!");
});

productRouter.get("/", (req: Request, res: Response) => {
  console.log("Products request received");
  res.send("List of products");
});

productRouter.get("/:id", (req: Request, res: Response) => {
  // console.log(req.params);
  // // res.send(req.params.id)
  // res.send(req.headers);
  // // console.log(req.headers);
  // // console.log(req.url);
  // console.log(req.query);
});

productRouter.post("/", (req: Request, res: Response) => {
  console.log("Products create request received");
  res.send("Product created");
});

export default productRouter;
