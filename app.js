// slowMath.add(1, 1)
// .then((answer) => {
//     console.log(answer);
//     return slowMath.multiply(answer, 2);
// }).then((answer2) => {   //passing in the result from the promise above down to this .then
//     console.log(answer2);
//     return slowMath.divide(answer2, 4);
// }).then((answer) => {
//     console.log(answer);
//     return slowMath.subtract(answer, 3);
// }).then((answer) => {
//     console.log(answer);
//     return slowMath.add(answer, 98);
// }).then((answer) => {
//     console.log(answer);
//     return slowMath.remainder(answer, 2);
// }).then((answer) => {
//     console.log(answer);
//     return slowMath.multiply(answer, 50);
// }).then((answer) =>  {
//     console.log(answer);
//     return slowMath.remainder(answer, 40);
// }).then((answer) => {
//     console.log(answer);
//     return slowMath.add(answer, 32);
// }).then((answer) => {
//     console.log(`The final result is ${answer}.`);
// }).catch((error) => {
//     console.log(error);
// });

const doMath = async () => {
    try {
        let number = await slowMath.add(6, 2);
        console.log(number);
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
    } catch (error) {
        console.log(error);
    }
}

doMath();