const express = require ("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
 var faker = require('faker');
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//routes
app.get("/", function (req,res) {
    res.render("index.html", {email:randomEmail});
});

app.get("/history", function (req,res) {
    res.render("history.html");
});

app.get("/languages", function (req,res) {
    res.render("languages.html");
});

app.get("/popgames", function (req,res) {
    res.render("popgames.html");
});
app.get("/references", function (req,res) {
    res.render("references.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});