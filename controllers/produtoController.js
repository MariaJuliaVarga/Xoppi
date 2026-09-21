import produto from "../models/produto.js";

class produtoController{
    static async createProduto(req, res){
        try{
            const foto = req.file ? req.file.filename : null;
            const {nome, quantidade, valor, descricao, fabricante} = req.body;
            const novoProduto = new produto(
                nome,
                fabricante,
                quantidade,
                foto,
                valor,
                descricao
            );
            await novoProduto.save();
            res.status(201).json(novoProduto);
        }
        catch(error){
            console.error('Erro ao cadastrar produto:', error);
            res.status(500).send(error);
        }
    }

    static async getAllProdutos(req, res){
        try{
            const produto = await produto.findAll();
            res.json(produto);
        }
        catch(error){
            console.error('Erro ao carregar produtos:', error);
            res.status(500).json({message: 'Erro interno ao buscar Produtos!!'})
        }
    }

    static async getProdutoById(req, res){
        try{
            const {id} = req.params;
            const produtoExistente = await produto.findById(id);

            if(!produtoExistente){
                return res.status(404).json({ message: 'Produto nao encontrado'});
            }
            res.json(produtoExistente);
        }
        catch (error){
            console.error('Erro ao carregar o produto:', error);
            res.status(500).json({message: 'Erro interno ao buscar Produto!!'})
        }
    }

    static async updateProduto(req, res){
        try{
            const {id} = req.params;
            const foto = req.file ? req.file.filename : null;
            const {nome, fabricante,quantidade,valor, descricao } = req.body; 
            
        const produtoAtualizado = {
            nome,
            fabricante,
            quantidade,
            valor,
            descricao
        }; 
            
            if (foto) {
            produtoAtualizado.foto = foto;
            }
            await produto.updateProduto(id, produtoAtualizado); 
        }
            catch (error){
            console.error('Erro ao carregar o produto:', error);
            res.status(500).json({message: 'Erro interno ao buscar Produto!!'})
        }
    }

    static async deletarProduto(req, res){
        try{
            const {id} = req.params;
            await produto.delete(id);
            return res.status(204).send(); 
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar produto' });
        }
    }

// Renderiza a página de cadastro de produto
    static async renderCadastrarProduto(req, res){
        try{
            res.render('cadastrar-produto');
        }
        catch(error){
            console.error('Erro ao carregar página de cadastro:', error);
            res.status(500).send('Erro ao carregar página de cadastro');
        }
    }


    // Renderiza a página com todos os produtos
    static async renderProdutos(req, res){
        try{
            const produtos = await produto.findAll();

            res.render('ver-produto', {
                produtos
            });
        }
        catch(error){
            console.error('Erro ao carregar página de produtos:', error);
            res.status(500).send('Erro ao carregar página de produtos');
        }
    }


    // Renderiza a página de um produto específico
    static async renderProduto(req, res){
        try{
            const { id } = req.params;

            const produtoExistente = await produto.findById(id);

            if(!produtoExistente){
                return res.status(404).send('Produto não encontrado');
            }

            res.render('produto', {
                produto: produtoExistente
            });
        }
        catch(error){
            console.error('Erro ao carregar página do produto:', error);
            res.status(500).send('Erro ao carregar página do produto');
        }
    }
 
}

export default produtoController;