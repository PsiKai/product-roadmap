const express = require("express")
const router = express.Router()

const ObjectId = require("bson-objectid")

const Epic = require("../db/models/epic")

router.delete("/", (req, res) => {
    const { id } = req.body
    Epic.findByIdAndDelete({ "_id": ObjectId(id) }, (err, epics) => {
        if (err) {
            console.error(error)
            res.send("Error deleting epic")
        } else {
            res.send(epics)
        }
    })
})

module.exports = router
