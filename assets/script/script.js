//! Ad una stringa di partenza, dovrai applicare i metodi per caratteri maiuscoli e minuscoli,
//! suddividere nei suoi elementi e selezionarne due. I due selezionati saranno concatenati in una stringa

let username = "Bruno";
let stringBenvenuto = `Benvenuto, io sono ${username}.`;
console.log(stringBenvenuto);

let upperCase = stringBenvenuto.toUpperCase();
console.log(upperCase);

let lowerCase = stringBenvenuto.toLowerCase();
console.log(lowerCase);

let arrayBenvenuto = stringBenvenuto.split(" ")

console.log(arrayBenvenuto);

let arrayToStringBenvenuto = arrayBenvenuto.join(" ");
console.log(arrayToStringBenvenuto);

//! Crea un array di persone

let persone = [
    "Giovanni",
    "Bruno",
    "Nicola",
    "Mattia",
    "Daniela",
];

//! Leggi il terzo elemento

console.log(persone[2]);

//! Passa all'array un valore tramite una variabile, leggi la lunghezza dell'array

let nuovaPersona = "Giuvanninu";
persone.push(nuovaPersona);
console.log(persone);
console.log(persone.length);

//! Crea una funzione all'interno della quale utilizzerei i valori numerici tratti da un array

arrayNumerico = [12, 28, 12, 32, 1, 3, 5, 90, 21, 29, 10];

function sum() {
    let result = arrayNumerico[3] + arrayNumerico[8];
    return result;
};

console.log(sum());

//! Usa i metodi push/pop e shift/unshift su un array

let add = persone.push("Brunilde");
console.log(persone);

let remove = persone.pop();
console.log(persone);

let takeFirst = persone.shift("");
console.log(takeFirst);
console.log(persone)

let addFirst = persone.unshift("Brunilde");
console.log(persone);
