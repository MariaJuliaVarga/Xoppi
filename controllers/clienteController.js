import cliente from "../models/cliente.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class clienteController{
    static async createCliente(req, res){
        try{
            const {nome, sobrenome, cpf, nascimento, telefone, email, senha } = req.body;
            const foto = req.file ? req.file.filename : null;
            
            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);

            const novoCliente = new cliente(
                nome, 
                sobrenome,
                cpf,
                nascimento,
                telefone,
                email,
                senhaHash, 
                foto
            );
            await novoCliente.save();
            res.status(201).json(novoCliente);
        }
        catch(error){
            console.error('Erro ao cadastrar cliente:', error);
            res.status(500).send(error);
        }
    }

    static async loginCliente(req, res) {
        try {
            console.log('Headers da requisição de login:', req.headers);
            console.log('Body da requisição de login:', req.body);
            
            const { email, senha } = req.body || {};
            
            if (!email || !senha) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios' });
            }
            
            const clienteExistente = await cliente.findByEmail(email);
            if (!clienteExistente) {
                return res.status(401).json({ message: 'Email inválido' });
            }

            const senhaValida = await bcrypt.compare(senha, clienteExistente.senha);
            if (!senhaValida) {
                return res.status(401).json({ message: 'Senha inválida' });
            }

            const token = jwt.sign(
                { id: clienteExistente._id, email: clienteExistente.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(200).json({ 
                message: 'Login realizado com sucesso',
                token, 
                cliente: { 
                    id: clienteExistente._id, 
                    nome: clienteExistente.nome, 
                    email: clienteExistente.email 
                } 
            });
        } catch (error) {
            console.error('Erro no login do cliente:', error);
            res.status(500).json({ message: 'Erro interno ao realizar login' });
        }
    }

    static async renderLogin(req, res) {
        try {
            // Usa o path.resolve para enviar o arquivo HTML estático (como é .html e não .ejs, não usa render)
            res.sendFile('login.html', { root: './views' });
        } catch (error) {
            console.error('Erro ao carregar página de login:', error);
            res.status(500).send('Erro ao carregar página de login');
        }
    }

    static async getAllCliente(req, res){
        try{
            const cliente = await cliente.findAll();
            res.json(cliente);
        }
        catch(error){
            console.error('Erro ao carregar Cliente:', error);
            res.status(500).json({message: 'Erro interno ao buscar Cliente!!'})
        }
    }

    static async getClienteById(req, res){
        try{
            const {id} = req.params;
            const clienteExistente = await cliente.findById(id);

            if(!clienteExistente){
                return res.status(404).json({ message: 'Cliente nao encontrado'});
            }
            res.json(clienteExistente);
        }
        catch (error){
            console.error('Erro ao carregar o cliente:', error);
            res.status(500).json({message: 'Erro interno ao buscar Cliente!!'})
        }
    }

    static async updateCliente(req, res){
        try{
            const {id} = req.params;
            const {nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha, foto } = req.body; 
            
        const clienteAtualizado = {
            nome, 
            sobrenome,
            cpf,
            nascimento,
            telefone,
            funcao,
            salario,
            email,
            senha,
            foto
        }; 
            await cliente.updateCliente(id, clienteAtualizado); 
        }
            catch (error){
            console.error('Erro ao carregar o cliente:', error);
            res.status(500).json({message: 'Erro interno ao buscar Cliente!!'})
        }
    }

    static async deletarCliente(req, res){
        try{
            const {id} = req.params;
            await cliente.delete(id);
            return res.status(204).send(); 
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar cliente' });
        }
    }

    // Renderiza a página de cadastro de cliente
static async renderCadastrarCliente(req, res){
    try{
        res.render('cadastrar-cliente');
    }
    catch(error){
        console.error('Erro ao carregar página de cadastro de cliente:', error);
        res.status(500).send('Erro ao carregar página de cadastro de cliente');
    }
}

// Renderiza a página com todos os clientes
static async renderClientes(req, res){
    try{
        const clientes = await cliente.findAll();

        res.render('ver-clientes', {
            clientes
        });
    }
    catch(error){
        console.error('Erro ao carregar página de clientes:', error);
        res.status(500).send('Erro ao carregar página de clientes');
    }
}

// Renderiza a página de um cliente específico
static async renderCliente(req, res){
    try{
        const { id } = req.params;

        const clienteExistente = await cliente.findById(id);

        if(!clienteExistente){
            return res.status(404).send('Cliente não encontrado');
        }

        res.render('cliente', {
            cliente: clienteExistente
        });
    }
    catch(error){
        console.error('Erro ao carregar página do cliente:', error);
        res.status(500).send('Erro ao carregar página do cliente');
    }
}

static async renderEditarCliente(req, res){
    try{
        const { id } = req.params;

        const clienteExistente = await cliente.findById(id);

        if(!clienteExistente){
            return res.status(404).send('Cliente não encontrado');
        }

        res.render('editar-cliente', {
            cliente: clienteExistente
        });
    }
    catch(error){
        console.error('Erro ao carregar página de edição do cliente:', error);
        res.status(500).send('Erro ao carregar página de edição do cliente');
    }
}
}

export default clienteController;