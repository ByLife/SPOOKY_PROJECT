const express = require("express")

module.exports = class Web extends express.Router {
    init(){
        this.get("/", (req, res) => {
            res.send("Normal ça marche")
        })
        this.post("/", (req, res) => {
            res.send("Marche aussi ?")
        })
    }
}