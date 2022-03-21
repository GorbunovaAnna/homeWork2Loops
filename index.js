// 4

// let sum = 0;

// for(let i = 0; ; i++) {
    
//     let userNumber = prompt('Enter number', '');

//     if(userNumber !== null) {

//         userNumber = Number(userNumber);
//         sum += userNumber;
//     } else {
//         let result = sum / i;
//         alert(`Result is ${result}`);
//         break;
//     }

// }


// 5

// for(; ;) {

//     let firstMultiplier = prompt('Enter first multiplier', '');
//     let secondMultiplier = prompt('Enter second multiplier', '');
//     let result = prompt('Enter result', '');

//     if(firstMultiplier === null || secondMultiplier === null || result === null) {
//         alert('You do not enter number');
//         break;
//     } 

//     if(firstMultiplier === '' || secondMultiplier === '' || result === '') {
//         alert('You do not enter nothing');
//     } else if (isNaN(firstMultiplier) || isNaN(secondMultiplier) || isNaN(result)) {
//         alert('Enter number!');
//     } else {
//         let sum = firstMultiplier * secondMultiplier;
//         if(sum === +result) {
//             alert('You are right!');
//         } else {
//             alert(`Right result ${sum}`);
//         }
//     }
// }





// 6


let hamsters = 100;


for (; ;) {

    let numberOfHamsters = prompt('How many hamster to get?');
    
    if(numberOfHamsters === null || numberOfHamsters === '' || isNaN(numberOfHamsters)) {
        alert('Enter number');
    } else if(numberOfHamsters > hamsters){
        alert('Not so many hamsters :)');
        break;
    } else {
        hamsters -= numberOfHamsters;
    }
    
}


// 7


// let oneUserNumber = prompt('Enter number');
// let twoUserNumber = prompt('Enter number');

// for(let i = oneUserNumber; i <= twoUserNumber; i++) {

//     if(oneUserNumber === null || twoUserNumber === null) {
//         alert('You do not enter number');
//     } else if(isNaN(oneUserNumber) || isNaN(twoUserNumber)) {
//         alert('Enter number!');
//     } else if(twoUserNumber <= oneUserNumber) {
//         alert('The second number must be greate than the first!');
//     } else {

//         let result = i * i;
//         alert(`the square of the number ${i} is ${result} `)

//     }

// }



// 8

// let userNumber = prompt('Enter number');

// if(userNumber !== null && userNumber !== '' && !isNaN(userNumber)) {
//     for (let i = userNumber; i > 0; i--) {
//         alert(i);
//     }

// } else {
//     alert('Enter number');
// }


// 9


// for (let i = 0; i <= 5; i++) {

//     let firstUserNumber = prompt('Enter  first number');

//     if(firstUserNumber )

// }




// 10


// let userNumber = prompt('Enter number');

// for () {

// }

