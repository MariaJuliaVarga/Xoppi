import express from 'express';
import produtoController from "../controllers/produtoController.js";
import fornecedorController from '../controllers/fornecedorController.js';
import clienteController from '../controllers/clienteController.js';
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
router.get('/produto/cadastrar', produtoController.renderCadastrarProduto);
router.get('/produtos', produtoController.renderProdutos);
router.get('/produto/:id', produtoController.renderProduto);

router.post('/fornecedor', fornecedorController.createFornecedor);
router.get('/Fornecedor', fornecedorController.getAllFornecedor);
router.put('/fornecedor/:id', fornecedorController.updateFornecedor);
router.delete('/fornecedor/:id', fornecedorController.deletarFornecedor);
router.get('/fornecedor/cadastrar', fornecedorController.renderCadastrarFornecedor);
router.get('/fornecedores', fornecedorController.renderFornecedores);
router.get('/fornecedor/:id', fornecedorController.renderFornecedor);

router.post("/cliente", upload.single("foto"), clienteController.createCliente);
router.get('/Cliente', clienteController.getAllCliente);
router.put('/cliente/:id', clienteController.updateCliente);
router.delete('/cliente/:id', clienteController.deletarCliente);
router.get('/cliente/cadastrar', clienteController.renderCadastrarCliente);
router.get('/cliente', clienteController.renderClientes);
router.get('/cliente/:id', clienteController.renderCliente);
export default router;