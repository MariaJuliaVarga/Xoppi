import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema(
    {
        razaoSocial : {type: String, required: true},
        cnpj : {type: Number, required: true}
    },
    {
        timestamps: true,
    }
);

const fornecedor = mongoose.model('fornecedor', fornecedorSchema);

export default fornecedor;