// gives date in milliseconds
console.log(Date.now());
// gives current date in time format
console.log(new Date());

const s = "1999";
//+ is unary operator that changes string to number
//it gives NAN if the string is not a number
console.log(+s);

// in js, array or objects are always passed by reference while variables are always passed by value

let str = "abc";
console.log(str.charCodeAt(0));

setTimeout(function () {
    setTimeout(function () {
        setTimeout(function () {
            console.log("msg 1");
        }, 250);
    }, 250);
}, 1000);
