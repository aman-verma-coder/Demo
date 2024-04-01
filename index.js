const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Data = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => { console.log("Connection Successful") })
    .catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/abcd");
}

let newData = new Data({
    name: "Aman",
    title: "Verma",
    description: "I am a student",
    image: "https://www.instagram.com/rnh2vermaji/",
    price: 5000000000000,
    created_at: new Date()
});

newData.save();

app.get("/", async (req, res) => {
    let data2 = await Data.find({});
    console.log(data2)
    res.send("All Ok");
})

app.listen(8080, () => {
    console.log("You are listening to port 8080");
})