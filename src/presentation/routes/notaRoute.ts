import { Request, Response } from "express";
import { NotaController } from "../controller/NotaController";

const express = require("express");
const router = express.Router();

//controller
const notaController = new NotaController();

//routes
router.get("/all", notaController.getAll);

router.get("/:id", async (req: Request, res: Response) => {
  const posts = await service.get(req.params.id);
  res.status(200).json(posts);
});

router.post("/save", async (req: Request, res: Response) => {
  const data = req.body;
  const posts = await service.save(data);
  res.status(200).json(posts);
});

router.put("/save/:id", async (req: Request, res: Response) => {
  const data = req.body;
  const posts = await service.update(req.params.id, data);
  res.status(200).json(posts);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const posts = await service.delete(req.params.id);
  res.status(200).json(posts);
});

export default router;
