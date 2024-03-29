
// //THIS IS THE ES5 WAY TO DO IT
slowMath.add(2, 6)
.then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer, 2);
}).then((answer2) => {   //passing in the result from the promise above down to this .then
    console.log(answer2);
    return slowMath.divide(answer2, 4);
}).then((answer) => {
    console.log(answer);
    return slowMath.subtract(answer, 3);
}).then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 98);
}).then((answer) => {
    console.log(answer);
    return slowMath.remainder(answer, 2);
}).then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer, 50);
}).then((answer) =>  {
    console.log(answer);
    return slowMath.remainder(answer, 40);
}).then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 32);
}).then((answer) => {
    console.log(`The final result is ${answer}.`);
}).catch((error) => {   //MUST HAVE A CATCH TO CATCH ERROR
    console.log(error);
});


//THIS IS THE ES6 WAY TO DO IT
const doMath = async () => {
    try {  //MUST USE TRY / CATCH WHEN USING async AND await IN ES6
        let number = await slowMath.add(2, 6);
        console.log(number);
        //next await below wont work until first await sends back a resolve or reject from that PROMISE
        let number2 = await slowMath.multiply(number, 2); //can use new variables and will still wait for previus await, number variable can be a number instead of variable also
        console.log(number2);
        number = await slowMath.divide(number2, 4);
        console.log(number);
        number = await slowMath.subtract(number, 3);
        console.log(number);
        number = await slowMath.add(number, 98);
        console.log(number);
        number = await slowMath.remainder(number, 2);
        console.log(number);
        number = await slowMath.multiply(number, 50);
        console.log(number);
        number = await slowMath.remainder(number, 40);
        console.log(number);
        number = await slowMath.add(number, 32);
        console.log(`The final result is ${number}.`);
    } catch (error) {   //THIS IS THE CATCH PART OF THE TRY/CATCH THAT MUST BE IN ES6 WHEN DOING PROMISE CHAIN OR EVEN ONE PROMISE
        console.log(error);
    }
}

doMath();