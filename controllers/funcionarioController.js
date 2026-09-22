import funcionario from "../models/funcionario.js";

class funcionarioController{
    static async createFuncionario(req, res){
        try{
            const {nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha } = req.body;
            const foto = req.file ? req.file.filename : null;
            const novoFuncionario = new funcionario(
                nome, 
                sobrenome,
                cpf,
                nascimento,
                telefone,
                funcao,
                salario,
                email,
                senha,
                foto );
            await novoFuncionario.save();
            res.status(201).json(novoFuncionario);
        }
        catch(error){
            console.error('Erro ao cadastrar funcionario:', error);
            res.status(500).send(error);
        }
    }

    static async getAllFuncionario(req, res){
        try{
            const funcionario = await funcionario.findAll();
            res.json(funcionario);
        }
        catch(error){
            console.error('Erro ao carregar funcionario:', error);
            res.status(500).json({message: 'Erro interno ao buscar funcionario!!'})
        }
    }

    static async getFuncionarioById(req, res){
        try{
            const {id} = req.params;
            const FuncionarioExistente = await funcionario.findById(id);

            if(!funcionarioExistente){
                return res.status(404).json({ message: 'Funcionario nao encontrado'});
            }
            res.json(funcionarioExistente);
        }
        catch (error){
            console.error('Erro ao carregar o funcionario:', error);
            res.status(500).json({message: 'Erro interno ao buscar funcionario!!'})
        }
    }

    static async updateFuncionario(req, res){
        try{
            const {id} = req.params;
            const {nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha } = req.body; 
            
        const funcionarioAtualizado = {
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
            await funcionario.updateFuncionario(id, funcionarioAtualizado); 
            res.status(200).json({ message: 'Funcionário atualizado com sucesso' });
        }
            catch (error){
            console.error('Erro ao carregar o funcionario:', error);
            res.status(500).json({message: 'Erro interno ao buscar funcionario!!'})
        }
    }

    static async deletarFuncionario(req, res){
        try{
            const {id} = req.params;
            await funcionario.delete(id);
            return res.status(204).send(); 
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar funcionario' });
        }
    }

    // Renderiza a página de cadastro de funcionario
static async renderCadastrarFuncionario(req, res){
    try{
        res.sendFile('cadastrar-funcionario.html', { root: './views' });
    }
    catch(error){
        console.error('Erro ao carregar página de cadastro de funcionario:', error);
        res.status(500).send('Erro ao carregar página de cadastro de funcionario');
    }
}

// Renderiza a página com todos os funcionarios
static async renderFuncionarios(req, res){
    try{
        const funcionarios = await funcionario.findAll();

        res.render('visualizar-funcionario.html', {
            funcionarios
        });
    }
    catch(error){
        console.error('Erro ao carregar página de funcionarios:', error);
        res.status(500).send('Erro ao carregar página de funcionarios');
    }
}

// Renderiza a página de um funcionario específico
static async renderFuncionario(req, res){
    try{
        const { id } = req.params;

        const funcionarioExistente = await funcionario.findById(id);

        if(!funcionarioExistente){
            return res.status(404).send('funcionario não encontrado');
        }

        res.render('funcionario', {
            funcionario: funcionarioExistente
        });
    }
    catch(error){
        console.error('Erro ao carregar página do funcionario:', error);
        res.status(500).send('Erro ao carregar página do funcionario');
    }
}

    // Renderiza a página de edição de funcionario
    static async renderEditarFuncionario(req, res){
        try{
            const { id } = req.params;

            const funcionarioExistente = await funcionario.findById(id);

            if(!funcionarioExistente){
                return res.status(404).send('Funcionario não encontrado');
            }

            res.render('editar-funcionario', {
                funcionario: funcionarioExistente
            });
        }
        catch(error){
            console.error('Erro ao carregar página de edição do funcionario:', error);
            res.status(500).send('Erro ao carregar página de edição do funcionario');
        }
    }
}

export default funcionarioController;