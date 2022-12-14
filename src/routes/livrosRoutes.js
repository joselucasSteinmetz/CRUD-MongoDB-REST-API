import express from "express";
import LivrosController from "../controller/LivrosController.js";

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivroPorAutor)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro)

    export default router;
