const express = require("express")
const router = express.Router()

const Epic = require("../db/models/epic")

router.post("/", (req, res) => {
    const { epic } = req.body
    console.log(epic);
    Epic.create(epic, (err, newEpic) => {
        if (err) {
            res.send(err)
        } else {
            res.send(newEpic)
        }
    })
})

module.exports = router
