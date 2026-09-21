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

router.post('/clientes', clienteController.createCliente);
router.get('/Clientes', clienteController.getAllCliente);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);
router.get('/clientes/cadastrar', clienteController.renderCadastrarCliente);
router.get('/clientes', clienteController.renderClientes);
router.get('/cliente/:id', clienteController.renderCliente);
export default router;