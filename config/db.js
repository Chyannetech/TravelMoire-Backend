//connect mongoose db
const mongoose = require('mongoose');


const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.DATABASE);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB