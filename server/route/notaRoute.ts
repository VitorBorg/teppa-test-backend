const express = require("express");
import { Request, Response } from "express";
const router = express.Router();

//import services
const service = require("../service/notaService");

//routes
router.get("/all", async (req: Request, res: Response) => {
  const posts = await service.getAll();
  res.status(200).json(posts);
});

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

module.exports = router;
