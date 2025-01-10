const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors= require('colors');
const path = require('/');
const connectDB = require('./config/connectDB');

//config dot env File
dotenv.config();

//xyvLAFuhQVnIiAqg

// database call
connectDB();

//rest object
const app= express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
// user routes
app.use('/api/v1/users', require('./routes/userRoute'))

//transection routes
app.use('/api/v1/transections', require('./routes/transectionRoutes'));


//static files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});



//transectionCtrl.js file inside const transections transectionModel.find() we can add date like this
// date:{ $gt : moment().subtract(Number(frequency),'d').toDate(),},
// app.get('/',(req,res) =>{
//     res.send('<h1>Hello from server</h1>');
// })

//port
const PORT = 8080 || process.env.PORT;

//listening server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
