import funcionarioSchema from "./funcionarioSchema.js";
class funcionario{
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
        const novoFuncionario = new funcionarioSchema({
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

        return await novoFuncionario.save();
    }

    static async findAll(){
        return await funcionario.find();
    }

    static async findById(id){
        return await funcionario.findById(id);
    }

    static async delete(id){
        return await funcionario.findByIdAndDelete(id);
    }

    static async updateFuncionario(id, funcionarioAtualizado){
        return await funcionario.findByIdAndUpdate(id, funcionarioAtualizado, {new: true});
    }
}

export default funcionario;