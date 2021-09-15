const mongoose = require("mongoose")

const dependencySchema = {
    title: String,
    description: String,
    status: String,
    subDependencies: Array
}

module.exports = mongoose.model("Dependency", dependencySchema)
