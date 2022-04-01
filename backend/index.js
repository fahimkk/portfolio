const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
PORT = process.env.PORT || 5000;

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.post("/contact", (req, res)=>{
	console.log("===> req body: ", req.body)
	console.log("===> req data: ", req.data)
	res.send("hello successful")
})

app.get("/home", (req, res)=>{
	console.log("/home")
	res.send("hello successful")
})


app.listen(PORT, ()=>{
	console.log(`Server is running on port: ${PORT}`)
});
