import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema(
    {
        nome : {type: String, required: true},
        sobrenome : {type: String, required: true},
        cpf : {type: String, required: true},
        nascimento : {type: Date, required: true},
        telefone : {type: String, required: true},
        funcao : {type: String, required: true},
        salario : {type: Number, required: true},
        email : {type: String, required: true},
        senha : {type: String, required: true},
        foto : {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const funcionario = mongoose.model('funcionario', funcionarioSchema);

export default funcionario;