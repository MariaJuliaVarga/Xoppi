import cliente from "../models/cliente.js";

class clienteController{
    static async createCliente(req, res){
        try{
            const {nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha } = req.body;

            const novoCliente = new cliente({
                nome, 
                sobrenome,
                cpf,
                nascimento,
                telefone,
                funcao,
                salario,
                email,
                senha });
            await novoCliente.save();
            res.status(201).json(novoCliente);
        }
        catch(error){
            console.error('Erro ao cadastrar cliente:', error);
            res.status(500).send(error);
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
            const {nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha } = req.body; 
            
        const clienteAtualizado = {
            nome, 
            sobrenome,
            cpf,
            nascimento,
            telefone,
            funcao,
            salario,
            email,
            senha
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
}

export default clienteController;