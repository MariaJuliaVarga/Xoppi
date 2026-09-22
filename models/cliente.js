import clienteSchema from "./clienteSchema.js";
class cliente{
    constructor(nome, sobrenome, cpf, nascimento, telefone, email, senha, foto){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.foto = foto;
    }

    async save(){
        const novoCliente = new clienteSchema({
        nome: this.nome,
        sobrenome: this.sobrenome,
        cpf: this.cpf,
        nascimento: this.nascimento,
        telefone: this.telefone,
        email: this.email,
        senha: this.senha,
        foto: this.foto

        });

        return await novoCliente.save();
    }

    static async findAll(){
        return await cliente.find();
    }

    static async findById(id){
        return await cliente.findById(id);
    }

    static async delete(id){
        return await cliente.findByIdAndDelete(id);
    }

    static async updateCliente(id, clienteAtualizado){
        return await cliente.findByIdAndUpdate(id, clienteAtualizado, {new: true});
    }
}

export default cliente;