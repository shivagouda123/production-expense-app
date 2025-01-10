const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}


//MONGO_URL = mongodb+srv://expenses-tracker:xyvLAFuhQVnIiAqg@expenses-trackers.fgn7ufg.mongodb.net/expenseApp
//xyvLAFuhQVnIiAqg
//P1BzVouylnK9eSjN
//mongodb+srv://expenses-tracker:P1BzVouylnK9eSjN@expenses-trackers.fgn7ufg.mongodb.net/expenseApp

module.exports = connectDB;