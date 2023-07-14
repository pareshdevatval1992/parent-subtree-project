const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB)

    .then(()=>{
        console.log("Database Connection successfull");
    }).catch((err)=>{
        console.log("err",err);
    })
}

module.exports = connectDB;