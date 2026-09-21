import produto from "./produtoSchema";
class produto{
    constructor(nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.valor = valor;
        this.telefone = telefone;
        this.funcao = funcao;
        this.salario = salario;
        this.email = email;
    }

    async save(){
        const novoCliente = new cliente({
        nome: this.nome = nome,
        sobrenome: this.sobrenome = sobrenome,
        cpf: this.cpf = cpf,
        nascimento: this.nascimento = nascimento,
        valor: this.valor = valor,
        telefone: this.telefone = telefone,
        funcao: this.funcao = funcao,
        salario: this.salario = salario,
        email: this.email = email
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