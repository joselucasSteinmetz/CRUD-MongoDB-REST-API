import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:506070@cluster0.plwpj6n.mongodb.net/TesteLivraria");

let db = mongoose.connection;

export default db;