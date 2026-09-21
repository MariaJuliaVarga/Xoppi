import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        nome : {type: String, required: true},
        sobrenome : {type: String, required: true},
        cpf : {type: String, required: true},
        nascimento : {type: date, required: true},
        telefone : {type: String, required: true},
        funcao : {type: String, required: true},
        salario : {type: number, required: true},
        email : {type: String, required: true},
        senha : {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const cliente = mongoose.model('cliente', clienteSchema);

export default cliente;