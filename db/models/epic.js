const mongoose = require("mongoose")
const dependencySchema = require("./dependencies")

const epicSchema = mongoose.Schema({
    toolkit: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    priority: {
        type: Number
    },
    status: {
        type: String,
        enum: ["Planned", "In Progress", "Completed", "Pruned", "Blocked"]
    },
    dependencies: {
        type: Array,
        default: [dependencySchema]
    },
    blocking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Epics"
    },
    blockers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Epics"
    }
})

module.exports = mongoose.model("Epic", epicSchema)
