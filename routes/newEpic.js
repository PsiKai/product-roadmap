const express = require("express")
const router = express.Router()

const { sortByPriority } = require("../utils/sortArray")
const Epic = require("../db/models/epic")

router.get("/", (req, res) => {
    Epic.find({}, (err, epics) => {
        if (err) {
            console.log(err);
            res.send("error")
        } else {
            res.send(epics)
        }
    })
})

router.post("/", (req, res) => {
    const { epic } = req.body

    Epic.find({"toolkit": epic.toolkit}, (err, epics) => {
        if (err) {console.log(err)}
        if (!epics) {
            Epic.create(epic, (err, newEpic) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send(newEpic)
                }
            })
        } else {
            const newEpicArray = sortByPriority(epics, epic)
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
        }
    })
})

module.exports = router
