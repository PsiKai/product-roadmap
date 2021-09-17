if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const path = require("path")
const connectDB = require("./db/db")

const app = express()

app.use(express.json())

connectDB()

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Backend started on port " + port))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

// Routes
app.use("/epic/new", require("./routes/newEpic"))
app.use("/epic/edit", require("./routes/editEpic"))
app.use("/epic/delete", require("./routes/deleteEpic"))
