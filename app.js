
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



// számokat visszafelé kiir 51 => 15

/*
const reverseInt = (n) => {
    if (n < 0) {
        return -1 * parseInt(n.toString().split('').reverse().join(''));
    }
    return parseInt(n.toString().split('').reverse().join(''));
}

console.log(reverseInt(51));
*/



const hozzaad__gomb = document.querySelector(".button");

const eredmeny = document.querySelector("#eredmeny");

let vegeredmeny = 0;

hozzaad__gomb.addEventListener("click", () => {
    let tipus = document.querySelector(".hozzaad__tipus").value;
    let ertek1 = parseInt(document.querySelector(".ertek1").value);
    let ertek2 = parseInt(document.querySelector(".ertek2").value);

    if(tipus === "osszead") {
        vegeredmeny = (ertek1 + ertek2);
    } else if(tipus === "kivon") {
        vegeredmeny = (ertek1 - ertek2);
    }

    eredmeny.textContent = vegeredmeny;
 
})

/*
let shoesAvailable = new Promise((resolve, rejected) => {
    let inStock = true;

    if(inStock) {
        resolve("Store has shoes in stock");
    } else {
        rejected("Store does not have shoes in stock");
    }
})

let sufficientFunds = () => {
    return new Promise((resolve, rejected) => {
       // setTimeout(() => resolve("Yay! Enough money in the bank"), 1000)
       setTimeout(() => rejected("Not enough money in the bank"), 1000)
    })
}

let transaction = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("Transaction went trough")
        }, 1000)
    })
}

shoesAvailable
    .then((response) => {
        console.log(response);
        return sufficientFunds();
    })
    .then((response) => {
        console.log(response);
        return transaction();
    })
    .then((response) => console.log("Finished! " + response))
    .catch((err) => console.log(err));
    
*/


/*
const azonostiokLekerdezese = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve([1, 34, 46, 99, 120])
        //rejected("Valami hiba történt")
    }, 2000)
})

const receptLekerdez = (receptID) => {
    return new Promise((resolve, rejected) => {
        setTimeout((id) => {
            const recept = {
                cim: 'GulyásLeves',
                kategoria: 'Levesek'
            };
            resolve(`${id}: ${recept.cim}`)
        },1500, receptID)
    })
}

const kategoriaLekerdez = (kategoria) => {
    return new Promise((resolve, rejected) => {
        setTimeout((kat) => {
            const levesek = [
                {cim: 'Tökeleves', kategoria: 'Levesek'},
                {cim: 'Húsleves', kategoria: 'Levesek'}
            ];
            resolve(levesek)
        }, 1500, kategoria)
    })
}*/

/*
azonostiokLekerdezese
    .then((azonositok) => {
        console.log(azonositok);
        return receptLekerdez(azonositok[2]);
    })
    .then((recept) => {
        console.log(recept);
        return kategoriaLekerdez(recept.kategoria)
    })
    .then((kategoria) => {
        console.log(kategoria);
    })
    .catch((hiba) => {
        console.log(hiba);
    })
*/
/*
async function getReceptek() {
    const azonositok = await azonostiokLekerdezese;
    console.log(azonositok);

    const receptek = await receptLekerdez(azonositok[2]);
    console.log(receptek);

    const kat = await kategoriaLekerdez(receptek.kategoria);
    console.log(kat);

    return receptek;
}

getReceptek().then(eredmeny => console.log(`${eredmeny} a legjobb leves`));
    
*/