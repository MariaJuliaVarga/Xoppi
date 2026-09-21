import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        razaoSocial : {type: String, required: true},
        cnpj : {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const fornecedor = mongoose.model('fornecedor', fornecedorSchema);

export default fornecedor;