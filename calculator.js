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

//ii) Get API to do multiplication of an array of numbers and return the product

//to import express

app.get('/multiplication', (req, res) => {
  var numbers = req.query.numbers.split(',').map(Number);
  var product = numbers.reduce((acc, curr) => acc * curr, 1);
  res.json({ result: product });
});

app.listen(3000, () => console.log(`server is up and listening on port 3000...`));


// iii) 



// export the packages to be used ( as apis can't be called from npm  )

export const addition = (numbers) => {
    let sum = 0;
    for(let i = 0; i <numbers.length; i++) {
        sum +=numbers[i]
    }
    return sum;
}

export const multiplication = (numbers) => {
    let product;
    for(let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product
}