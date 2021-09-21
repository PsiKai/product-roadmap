const express = require("express")
const router = express.Router()

const { editEpic } = require("../utils/sortArray")

const ObjectId = require("bson-objectid")

const Epic = require("../db/models/epic")

router.post("/", (req, res) => {
    const { epic, epic: { _id } } = req.body
    Epic.find({"toolkit": epic.toolkit}, (err, epics) => {
        if (err) {console.log(err)}
        const newEpicArray = editEpic(epics, epic)
        Epic.bulkWrite(
            newEpicArray.map(newEpic =>
                ({
                    updateOne: {
                        filter: {"title": newEpic.title},
                        update: {$set: {
                            "title": newEpic.title,
                            "description": newEpic.description,
                            "priority": newEpic.priority,
                            "status": newEpic.status,
                            "toolkit": newEpic.toolkit,
                            "dependencies": newEpic.dependencies,
                            "__v": newEpic.__v
                        }},
                        upsert: true
                    }
                })
            ), (err, response) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log(response)
                    res.send(response)
                }
            }
        )
    })
})

module.exports = router
