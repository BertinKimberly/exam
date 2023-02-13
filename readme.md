This is an npm package for computing the sum and the product of more than two numbers. 
It has 2 functions, addition and multiplication;

`The link to the npm package is here: https://www.npmjs.com/package/bertin-calculator`

you can use the below codes as a starting example:
    ```
    const calculator = require('bertin-calculator')
    const sum = calculator.addition([10, 20, 40])
    const product = calculator.multiplication([10, 2, 3])
    console.log(`The answer should be ${sum} and the product should be ${product}`)
    ```