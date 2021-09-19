const express = require("express")
const router = express.Router()


const Epic = require("../db/models/epic")

router.post("/", (req, res) => {
    const { toolkit, newToolkit } = req.body
    console.log(toolkit, newToolkit);
    Epic.updateMany({"toolkit": toolkit}, {"toolkit": newToolkit}, (err, updatedEpic) => {
        if (err) {
            console.error(err)
            res.send("Error updating Epic")
        } else {
            res.send("Epics updated:", updatedEpic)
        }
    })
})

module.exports = router
