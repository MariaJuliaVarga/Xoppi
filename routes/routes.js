import express from 'express';
import produtoController from "../controllers/produtoController.js";
import fornecedorController from '../controllers/fornecedorController.js';
import clienteController from '../controllers/clienteController.js';
import funcionarioController from '../controllers/funcionarioController.js';

import upload from "../config/multer.js";
import autenticarToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('home.html', { root: './views' });
});

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
router.put('/cliente/:id', clienteController.updateCliente);
router.delete('/cliente/:id', clienteController.deletarCliente);
router.get('/cliente/cadastrar', clienteController.renderCadastrarCliente);
router.get('/clientes', clienteController.renderClientes); // Rota /clientes ajustada para não conflitar
router.get('/cliente/:id', clienteController.renderCliente);
router.get('/cliente/editar/:id', clienteController.renderEditarCliente);

router.post("/funcionario", upload.single("foto"), funcionarioController.createFuncionario);
router.put('/funcionario/:id',upload.single('foto'), funcionarioController.updateFuncionario);
router.get('/funcionario', funcionarioController.getAllFuncionario);
router.put('/funcionario/:id', funcionarioController.updateFuncionario);
router.delete('/funcionario/:id', funcionarioController.deletarFuncionario);
router.get('/funcionario/cadastrar', funcionarioController.renderCadastrarFuncionario);
router.get('/funcionario', funcionarioController.renderFuncionarios);
router.get('/funcionario/:id', funcionarioController.renderFuncionario);
router.get('/funcionario/editar/:id', funcionarioController.renderEditarFuncionario);

import cliente from '../models/cliente.js';
import funcionario from '../models/funcionario.js';
import produto from '../models/produto.js';
import fornecedor from '../models/fornecedor.js';

router.get('/recursos', async (req, res) => {
    try {
        const clientes = await cliente.findAll();
        const funcionarios = await funcionario.findAll();
        const produtos = await produto.findAll();
        const fornecedores = await fornecedor.findAll();
        res.render('visualizar-recursos', { clientes, funcionarios, produtos, fornecedores });
    } catch (error) {
        console.error('Erro ao carregar recursos:', error);
        res.status(500).send('Erro ao carregar recursos');
    }
});

export default router;