import produto from "./produtoSchema";
class produto{
    constructor(nome, fabricante, quantidade, foto, valor, descricao){
        this.nome = nome;
        this.fabricante = fabricante;
        this.quantidade = quantidade;
        this.foto = foto;
        this.valor = valor;
        this.descricao = descricao;
    }

    async save(){
        const novoProduto = new produto({
            nome: this.nome,
            fabricante: this.fabricante,
            quantidade: this.quantidade,
            foto: this.foto,
            valor: this.valor,
            descricao: this.descricao
        });

        return await novoProduto.save();
    }

    static async findAll(){
        return await produto.find();
    }

    static async findById(id){
        return await produto.findById(id);
    }

    static async delete(id){
        return await produto.findByIdAndDelete(id);
    }

    static async updateProduto(id, produtoAtualizado){
        return await produto.findByIdAndUpdate(id, produtoAtualizado, {new: true});
    }
}

export default produto;