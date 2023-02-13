// ..........i).............

// RESTFULL APIs.

//i) GET API to do addition of list of numbers and return their sum


const express = require('express');
const app = express();


app.get('/addition', (req, res) => {

  var numbers = req.query.numbers.split(',').map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  res.json({ result: sum });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



//ii) Get API to do multiplication of an array of numbers and return the product

//to import express

app.get('/multiplication', (req, res) => {
  var numbers = req.query.numbers.split(',').map(Number);
  var product = numbers.reduce((acc, curr) => acc * curr, 1);
  res.json({ result: product });
});

app.listen(3000, () => {
  console.log('Server listening on port 5000');
});


// iii) 

