var express = require('express');
const app = express();
const db = require('./db')
const Person = require('./models/person')
const bodyParser = require('body-parser')
app.use(bodyParser.json())  //req.body


app.get('/person', async(req, res) => {
try{
const data = await Person.find();
console.log("we get data")
res.status(200).json(data);
}
catch(err){
  console.log(err);
    res.status(500).json({ error: "internal server error" })

}
})

app.post('/person', async (req, res) => {

  try {
    const data = req.body;  //assuming req.body contains person data
    // create a new person document using mongoose model
    const newPerson = new Person(data);
    const response = await newPerson.save()
    console.log("data saved")
    res.status(200).json(response);

  }
  catch (err){
    console.log(err);
    res.status(500).json({ error: "internal server error" })

  }

})




app.listen(3000, () => {
  console.log("server listening on port 3000");
})