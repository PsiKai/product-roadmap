const express = require("express")
const router = express.Router()

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
    Epic.create(epic, (err, newEpic) => {
        if (err) {
            res.send(err)
        } else {
            res.send(newEpic)
        }
    })
})

module.exports = router
