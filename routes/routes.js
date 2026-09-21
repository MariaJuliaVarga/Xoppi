import express from 'express';
import produtoController from "../controllers/produtoController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post(
    '/produto',
    upload.single('foto'),
    produtoController.createProduto
);
router.get('/Produto', produtoController.getAllProdutos);
router.put('/produto/:id',upload.single('foto'), produtoController.updateProduto);
router.delete('/produto/:id',produtoController.deletarProduto);

export default router;