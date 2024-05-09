const mongoose= require('mongoose');
const colors= require('colors');


const connectDb= ()=>{
    mongoose.connect("mongodb+srv://Mayur:Mayur@cluster0.pofppjq.mongodb.net/Mahendra_DB?retryWrites=true&w=majority", {
        useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=> console.log(`DATABASE CONNECTED`.bold.green)).catch((e)=>{
        console.error(`Error: ${e.message}`.red.bold)
    })
}

module.exports= connectDb