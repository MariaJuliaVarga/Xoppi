import funcionarioSchema from "./funcionarioSchema.js";
class funcionario{
    constructor(nome, sobrenome, cpf, nascimento, telefone, funcao, salario, email, senha, foto){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.funcao = funcao;
        this.salario = salario;
        this.email = email;
        this.senha = senha;
        this.foto = foto;
    }

    async save(){
        const novoFuncionario = new funcionarioSchema({
        nome: this.nome,
        sobrenome: this.sobrenome,
        cpf: this.cpf,
        nascimento: this.nascimento,
        telefone: this.telefone,
        funcao: this.funcao,
        salario: this.salario,
        email: this.email,
        senha: this.senha,
        foto: this.foto
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