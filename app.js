const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT || 3100, () => {
    console.log("Servidor corriendo en http://localhost:3100")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.post("/register", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/index.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

