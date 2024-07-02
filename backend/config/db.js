const mongoose=require("mongoose");
require("dotenv").config();
console.log(process.env.mongoDbUrl)
const connection = mongoose.connect(process.env.mongoDbUrl);
// const connection=mongoose.connect("mongodb+srv://divyanshu002mishra:T1W1YMzjNBSEmnh5@cluster0.w2zehdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connection
}

