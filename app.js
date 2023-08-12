const express = require("express")
const path = require("path");
const app = express();
const hbs = require("hbs");
const Register = require("./models/registers");
require("./db/conn");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
//const template_path = path.join(__dirname, "../templates/views");
//const partial_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
//app.set("view engine", template_path)
//hbs.registerPartials(partial_path)
app.get("/", (req, res) => {
    res.render("index")
})

// app.get("/register",(req,res)=>{
//     res.render("register")
// })

app.post("/", async (req, res) => {
    try {
        const registerUser = new Register({
            email: req.body.email,
            password: req.body.password
        })

        const registered = await registerUser.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/login", async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email })
        if (useremail.password === password) {
            res.status(201).render("index");
        } else {
            res.send("wrong password");
        }
    } catch (error) {
        res.status(400).send("invalid email");
    }
})
app.listen(port, () => {
    console.log(`console is running at port ${port}`)
})