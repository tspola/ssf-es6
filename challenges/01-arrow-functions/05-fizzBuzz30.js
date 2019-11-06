//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'


const fizzBuzz30 = () => {
    let output = [];
    for(i=1; i <= 30;  i++) {
        output.push(
            i%15 === 0 ? 'fizzbuzz'
            : i%3 === 0 ? 'fizz'
            : i%5 === 0 ? 'buzz'
            : i
        )
    }
    return output
}
    
        

//Do not edit
module.exports = fizzBuzz30;