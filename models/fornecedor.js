import fornecedorSchema from "./fornecedorSchema.js";
class fornecedor{
    constructor(razaoSocial, cnpj){
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }


    async save(){
        const novoFornecedor = new fornecedorSchema({
            razaoSocial: this.razaoSocial,
            cnpj: this.cnpj,

        });

        return await novoFornecedor.save();
    }

    static async findAll(){
        return await fornecedorSchema.find();
    }

    static async findById(id){
        return await fornecedorSchema.findById(id);
    }

    static async delete(id){
        return await fornecedorSchema.findByIdAndDelete(id);
    }

    static async updateFornecedor(id, fornecedorAtualizado){
        return await fornecedorSchema.findByIdAndUpdate(id, fornecedorAtualizado, {new: true});
    }
}

export default fornecedor;