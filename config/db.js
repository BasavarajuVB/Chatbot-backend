const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://VBRaju:Raju0393@cluster0.ydhfkvz.mongodb.net/Chatbot?retryWrites=true&w=majority&appName=Cluster0', {
          
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
