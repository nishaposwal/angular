const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', function( req, res){
  res.send("hello from server");
});

app.post('/enroll', function (req, res) {
console.log(req.body);
res.status(200).send({"message": "data recieved"});
})

app.listen(port, function () {
    console.log("listening" + port);
})



