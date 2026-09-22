import express from 'express';
import produtoController from "../controllers/produtoController.js";
import fornecedorController from '../controllers/fornecedorController.js';
import clienteController from '../controllers/clienteController.js';
import funcionarioController from '../controllers/funcionarioController.js';

import upload from "../config/multer.js";

const router = express.Router();

router.post('/produto',upload.single('foto'),produtoController.createProduto);
router.get('/produto', produtoController.getAllProdutos);
router.put('/produto/:id',upload.single('foto'), produtoController.updateProduto);
router.delete('/produto/:id',produtoController.deletarProduto);
router.get('/produto/cadastrar', produtoController.renderCadastrarProduto);
router.get('/produtos', produtoController.renderProdutos);
router.get('/produto/:id', produtoController.renderProduto);

router.post('/fornecedor', fornecedorController.createFornecedor);
router.get('/fornecedor', fornecedorController.getAllFornecedor);
router.put('/fornecedor/:id', fornecedorController.updateFornecedor);
router.delete('/fornecedor/:id', fornecedorController.deletarFornecedor);
router.get('/fornecedor/cadastrar', fornecedorController.renderCadastrarFornecedor);
router.get('/fornecedores', fornecedorController.renderFornecedores);
router.get('/fornecedor/:id', fornecedorController.renderFornecedor);

router.post("/cliente", upload.single("foto"), clienteController.createCliente);
router.get('/cliente', clienteController.getAllCliente);
router.put('/cliente/:id', clienteController.updateCliente);
router.delete('/cliente/:id', clienteController.deletarCliente);
router.get('/cliente/cadastrar', clienteController.renderCadastrarCliente);
router.get('/cliente', clienteController.renderClientes);
router.get('/cliente/:id', clienteController.renderCliente);

router.post("/funcionario", upload.single("foto"), funcionarioController.createFuncionario);
router.put('/funcionario/:id',upload.single('foto'), funcionarioController.updateFuncionario);
router.get('/funcionario', funcionarioController.getAllFuncionario);
router.put('/funcionario/:id', funcionarioController.updateFuncionario);
router.delete('/funcionario/:id', funcionarioController.deletarFuncionario);
router.get('/funcionario/cadastrar', funcionarioController.renderCadastrarFuncionario);
router.get('/funcionario', funcionarioController.renderFuncionarios);
router.get('/funcionario/:id', funcionarioController.renderFuncionario);

export default router;