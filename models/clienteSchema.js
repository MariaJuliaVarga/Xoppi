import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        nome : {type: String, required: true},
        sobrenome : {type: String, required: true},
        cpf : {type: String, required: true},
        nascimento : {type: Date, required: true},
        telefone : {type: String, required: true},
        email : {type: String, required: true, unique: true},
        senha : {type: String, required: true},
        foto: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const cliente = mongoose.model('cliente', clienteSchema);

export default cliente;