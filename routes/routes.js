import express from 'express';
import produtoController from "../controllers/produtoController.js";
import fornecedorController from '../controllers/fornecedorController.js';
import clienteController from '../controllers/clienteController.js';
import funcionarioController from '../controllers/funcionarioController.js';

import upload from "../config/multer.js";
import autenticarToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/produto',upload.single('foto'),produtoController.createProduto);
router.get('/produto', produtoController.getAllProdutos);
router.put('/produto/:id',upload.single('foto'), produtoController.updateProduto);
router.delete('/produto/:id',produtoController.deletarProduto);
router.get('/produto/cadastrar', produtoController.renderCadastrarProduto);
router.get('/produtos', produtoController.renderProdutos);
router.get('/produto/:id', produtoController.renderProduto);
router.get('/produto/editar/:id', produtoController.renderEditarProduto);

router.post('/fornecedor', fornecedorController.createFornecedor);
router.get('/fornecedor', fornecedorController.getAllFornecedor);
router.put('/fornecedor/:id', fornecedorController.updateFornecedor);
router.delete('/fornecedor/:id', fornecedorController.deletarFornecedor);
router.get('/fornecedor/cadastrar', fornecedorController.renderCadastrarFornecedor);
router.get('/fornecedores', fornecedorController.renderFornecedores);
router.get('/fornecedor/:id', fornecedorController.renderFornecedor);
router.get('/fornecedor/editar/:id', fornecedorController.renderEditarFornecedor);

// Rotas de login
router.post('/cliente/login', upload.none(), clienteController.loginCliente);
router.get('/login', clienteController.renderLogin);

router.post("/cliente", upload.single("foto"), clienteController.createCliente);
router.get('/cliente', clienteController.getAllCliente);
router.put('/cliente/:id', autenticarToken, clienteController.updateCliente);
router.delete('/cliente/:id', autenticarToken, clienteController.deletarCliente);
router.get('/cliente/cadastrar', clienteController.renderCadastrarCliente);
router.get('/clientes', clienteController.renderClientes); // Rota /clientes ajustada para não conflitar
router.get('/cliente/:id', autenticarToken, clienteController.renderCliente);
router.get('/cliente/editar/:id', autenticarToken, clienteController.renderEditarCliente);

router.post("/funcionario", upload.single("foto"), funcionarioController.createFuncionario);
router.put('/funcionario/:id',upload.single('foto'), funcionarioController.updateFuncionario);
router.get('/funcionario', funcionarioController.getAllFuncionario);
router.put('/funcionario/:id', funcionarioController.updateFuncionario);
router.delete('/funcionario/:id', funcionarioController.deletarFuncionario);
router.get('/funcionario/cadastrar', funcionarioController.renderCadastrarFuncionario);
router.get('/funcionario', funcionarioController.renderFuncionarios);
router.get('/funcionario/:id', funcionarioController.renderFuncionario);
router.get('/funcionario/editar/:id', funcionarioController.renderEditarFuncionario);

export default router;