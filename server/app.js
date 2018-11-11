const express = require('express');
const cors = require('cors');

//backend server
const app = express();
app.use(express.json()); //parse request body as JSON
app.use(cors()); //only for dev purposes

//routes
const rateCallback = (req, res) =>
{
  let reqBody = req.body;

  if(!reqBody)
    res.status(400).send({"status": "not a valid, or no input at all"});

  //mock a DB request (stored procedure / insert data, etc...)
  //send response to client
  res.status(200).send({"status": "ok", "message": "submitted item id #" + reqBody.item + " with rating " + reqBody.rating});
}

//TODO: controller pollicy => validate body from request
app.post('/rate', rateCallback);

//start server
const port = process.env.PORT || 8181;
app.listen(port);
console.log("Server started on port:" + port);