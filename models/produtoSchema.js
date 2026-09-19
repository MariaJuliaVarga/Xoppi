import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        nome : {type: String, required: true},
        fabricante : {type: String, required: true},
        quantidade : {type: Number, required: true},
        foto : {type: String, required: true},
        valor : {type: Number, required: true},
        descricao : {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const produto = mongoose.model('produto', produtoSchema);

export default produto;