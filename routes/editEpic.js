const express = require("express")
const router = express.Router()

const ObjectId = require("bson-objectid")

const Epic = require("../db/models/epic")

router.post("/", (req, res) => {
    const { epic, epic: { _id } } = req.body
    Epic.findOneAndUpdate({"_id": ObjectId(_id)}, epic, (err, updatedEpic) => {
        if (err) {
            console.error(err)
            res.send("Error updating Epic")
        } else {
            res.send(updatedEpic)
        }
    })
})

module.exports = router
