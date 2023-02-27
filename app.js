
// 1, írj egy fügvényt ami paraméterként kap egy string-et
// az fv minden másoduk betüt nagybetűvé alakít a srtingben
// az fv visszak kell adni az átalakított stringet
// "hello" => "HeLlO"
// "yo eli" => "Yo eLi"
// "hello???" => "HeLlO???"
// "HELLO" => "HeLlO"
/*
function camelLetters (string) {

    let camelSting = "";

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            camelSting += string[i].toUpperCase();
        } else {
            camelSting += string[i].toLowerCase();
        } 
        
    }

    return camelSting;
}


console.log(camelLetters("hello"));
console.log(camelLetters("yo eli"));
console.log(camelLetters("hello???"));
console.log(camelLetters("HELLO"));
*/



/*Írjon olyan fv amely egy természetes számrról eldönti, hogy prímszám-e vagy sem!*/

/*
const prim = (szam) => {
    switch (szam) {
        case 1: return 0;
        case 2: return 1;
    }
    for (let i = 3; i <= szam/2; i++) {
        if(szam % i === 0) {
            return 0;
        }
    }
    return 1;
}

const szam = 8;

if(prim(szam)){
    console.log("Prímszám!");
} else {
    console.log("Nem prímszám!");
}
*/

/*Írjon egy olyan fv ami amely egy természetes számról eldönti hogy tökéletes szám-e, vagy sem!
(pozitív oszóinak összege a szám kétszerese)*/

/*
const tokeletesSzam = (szam) => {
    let count = 0;
    let message;
    for (let i = 1; i <= szam / 2; i++) {
        if (szam % i === 0) {
            count += i;
        }
    }
    console.log(count);

    
    if (count === szam) {
        message = `A ${szam}, egy tökéletes szám`;
    }
    else {
        message = `A(z) ${szam}, nem tökéletes szám`;
    }
    return message;
}


console.log(tokeletesSzam(300));

*/

/*Írjon egy olyn fv amely egy karakterláncban az első betűt nagybetűvé alakítja*/

/*
const firstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(firstLetter("tutorial"));*/

/* given a string reverse it reverse ('apple') === 'elppa';
   reverse{'Greetings!'} = !sgniteerG
*/

/*
    solution 1
    1. given string - convert it into array
    2. reverse it the array
    3. turn the array back into string
*/
/*
const revString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

 revString("apple");
*/
/*
    solution 2
    1. given string - create empty string
    2. loop through each character
    3. return the reversed
*/
/*
const revString2 = (str) => {
    let string = '';
    for (let i = str.length; i >= 0; i--) {
        string += str.charAt(i);
    }

    console.log(string);

} 

revString2("apple");
*/

/*Palindrom szöveg (visszafele olvasva ugyanaz) */

/*
function palindrom (str) {
    let string = '';
    for (let i = str.length; i >= 0; i--) {
        string += str.charAt(i);
    }

    if(str === string) {
        console.log("Palindrom");
    } else {
        console.log("Nem Palindrom");
    }
}

palindrom("suta");
*/

/*
var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner;
    }

    return add;
}

var addThree = addTo(3);
console.log(addThree(2));

console.log(addTo(3)(2));
*/

