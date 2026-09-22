import clienteSchema from "./clienteSchema.js";
class cliente{
    constructor(nome, sobrenome, cpf, nascimento, telefone, email, senha){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.valor = valor;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }

    async save(){
        const novoCliente = new clienteSchema({
        nome: this.nome = nome,
        sobrenome: this.sobrenome = sobrenome,
        cpf: this.cpf = cpf,
        nascimento: this.nascimento = nascimento,
        valor: this.valor = valor,
        telefone: this.telefone = telefone,
        email: this.email = email,
        senha: this.senha = senha

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