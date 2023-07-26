var express = require("express");
var app = express();
const port =3000;



app.get("/", (req, res) =>{
    res.send('Welcome to the Homepage')
})

app.get("/contact", (req, res) => {
  res.send("contact us at sail@contact.com");
});

app.get("/about", (req, res) => {
  res.send("See more about us");
});



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:{port}`)
})