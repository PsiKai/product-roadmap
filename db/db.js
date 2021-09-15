if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const mongoose = require("mongoose")
const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true
        })
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB
