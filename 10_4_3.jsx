function reverseString(str) {


    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


let string = ('Enter a string: ');

let result = reverseString(string);
console.log(result);