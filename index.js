const express = require("express")
const path = require("path")
const app = express()
const redditData = require("./data.json")
app.use(express.static(path.join(__dirname, "/views")))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "/views"))
app.get("/", (req, res) => {
    res.send("<h1>This is the home page!!</h1>")
    res.render("../EJS_files/home.ejs")
})
app.get("/puppys", (req, res) => {
    const puppys = ["Cutey", "Fluffy", "Pug", "Claty", "Shreddy"]
    res.render("cats", { puppys })
})
app.get("/r/:subreddit", () => {
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if (data) {
        res.render("subreddit", {subreddit})
    }
    else {
        res.render("notfound", {subreddit})
    }
})
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 500) + 1
    res.render("random", {num})
})
app.listen(3000, () => {
    console.log("It's working!");
})