const mongoose = require("mongoose")

// schema design 
const expenceSchema = new mongoose.Schema(
    {
        name: {type: String,
        trim:true,
        required: [true, "Name is required"]},
        email: {type: String,
        trim:true,
        unique: true,
        required: [true, "Your Email"]},
        password: {type: String,
        trim:true,
        required: [true, "Enter password"]},
        
    },
    {timestamps:true}
)
// export 
const collection = mongoose.model("expence-data", expenceSchema);
module.exports = collection;