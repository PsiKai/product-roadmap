if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const path = require("path")
const connectDB = require("./db/db")
const mongoose = require("mongoose")

const app = express()

connectDB()

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Backend started on port " + port))



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

    app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const testSchema = mongoose.Schema({
    doc: {
        type: String
    }
})

const Test = mongoose.model("Test", testSchema)

app.get("/testdb", async (req, res) => {
    Test.create({doc: "This is from the DB"}, {new: true}, (err, newTest) => {
        if (err) {
            console.log(err);
            res.status(400)
        }
        res.send(newTest)
    })
})
