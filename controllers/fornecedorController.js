import fornecedor from "../models/fornecedor.js";

class fornecedorController{
    static async createFornecedor(req,res){
        try{
            const {razaoSocial,cnpj} = req.body;

            const novoFornecedor = new fornecedor(
                razaoSocial,
                cnpj
            );
            await novoFornecedor.save();
            res.status(201).json(novoFornecedor);
        }
        catch(error){
            console.error('Erro ao cadastrar fornecedor:', error);
            res.status(500).send(error);
        }
    }

    static async getAllFornecedor(req, res){
        try{
            const fornecedor = await fornecedor.findAll();
            res.json(fornecedor);
        }
        catch(error){
            console.error('Erro ao carregar fornecedor:', error);
            res.status(500).json({message: 'Erro interno ao buscar Fornecedor!!'})
        }
    }
    
    static async getFornecedorById(req, res){
        try{
            const {id} = req.params;
            const FornecedorExistente = await fornecedor.findById(id);

            if(!FornecedorExistente){
                return res.status(404).json({ message: 'Fornecedor nao encontrado'});
            }
            res.json(FornecedorExistente);
        }
        catch (error){
            console.error('Erro ao carregar o fornecedor:', error);
            res.status(500).json({message: 'Erro interno ao buscar Fornecedor!!'})
        }
    }


    static async updateFornecedor(req, res){
        try{
            const {id} = req.params;
            const {razaoSocial,cnpj} = req.body; 
            
        const fornecedorAtualizado = {
            razaoSocial,
            cnpj
        }; 
            await fornecedor.updateFornecedor(id, fornecedorAtualizado); 
            res.status(200).json({ message: 'Fornecedor atualizado com sucesso' });
        }
            catch (error){
            console.error('Erro ao carregar o fornecedor:', error);
            res.status(500).json({message: 'Erro interno ao buscar fornecedor!!'})
        }
    }

    static async deletarFornecedor(req, res){
        try{
            const {id} = req.params;
            await fornecedor.delete(id);
            return res.status(204).send(); 
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar fornecedor' });
        }
    }

        // Renderiza a página de cadastro de fornecedor
    static async renderCadastrarFornecedor(req, res){
        try{
            res.sendFile('cadastrar-fornecedor.html', { root: './views' });
        }
        catch(error){
            console.error('Erro ao carregar página de cadastro de fornecedor:', error);
            res.status(500).send('Erro ao carregar página de cadastro de fornecedor');
        }
    }

    // Renderiza a página com todos os fornecedores
    static async renderFornecedores(req, res){
        try{
            const fornecedores = await fornecedor.findAll();

            res.render('ver-fornecedor', {
                fornecedores
            });
        }
        catch(error){
            console.error('Erro ao carregar página de fornecedores:', error);
            res.status(500).send('Erro ao carregar página de fornecedores');
        }
    }

    // Renderiza a página de um fornecedor específico
    static async renderFornecedor(req, res){
        try{
            const { id } = req.params;

            const fornecedorExistente = await fornecedor.findById(id);

            if(!fornecedorExistente){
                return res.status(404).send('Fornecedor não encontrado');
            }

            res.render('fornecedor', {
                fornecedor: fornecedorExistente
            });
        }
        catch(error){
            console.error('Erro ao carregar página do fornecedor:', error);
            res.status(500).send('Erro ao carregar página do fornecedor');
        }
    }

        // Renderiza a página de edição de fornecedor
    static async renderEditarFornecedor(req, res){
        try{
            const { id } = req.params;

            const fornecedorExistente = await fornecedor.findById(id);

            if(!fornecedorExistente){
                return res.status(404).send('Fornecedor não encontrado');
            }

            res.render('editar-fornecedor', {
                fornecedor: fornecedorExistente
            });
        }
        catch(error){
            console.error('Erro ao carregar página de edição do fornecedor:', error);
            res.status(500).send('Erro ao carregar página de edição do fornecedor');
        }
    }
}

export default fornecedorController;