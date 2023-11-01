tehtävä 1

// Pyydetään käyttäjältä parillista lukua
let input = prompt("Syötä parillinen luku:");

// Muutetaan käyttäjän syöte numeroksi
let number = parseInt(input);

// Tarkistetaan, että käyttäjän syöte on parillinen
if (number % 2 === 0) {
  // Tulostetaan kaikki parilliset luvut siihen asti poislukien 0
  for (let i = 2; i <= number; i += 2) {
    console.log(i);
  }
} else {
  console.log("Syöte ei ollut parillinen luku.");
}

tehtävä 2

// Pyydetään käyttäjältä sana
let input = prompt("Syötä sana:");

// Muutetaan sana salasanaksi
let password = "";
for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    password += input.charAt(i);
  } else {
    password += "Ö" + input.charAt(i);
  }
}

// Tulostetaan salasana
console.log(password);

tehtävä 3

// Pyydetään käyttäjältä sana
let input = prompt("Syötä sana:");

// Tarkistetaan, onko sanassa ö-kirjainta
if (input.includes("ö") || input.includes("Ö")) {
  console.log("on");
} else {
  console.log("ei ole");
}

tehtävä 4

// Pyydetään käyttäjältä luku
let input = prompt("Syötä luku:");

// Muutetaan käyttäjän syöte numeroksi
let number = parseInt(input);

// Lasketaan kertoma
let factorial = 1;
for (let i = 2; i <= number; i++) {
  factorial *= i;
}

// Tulostetaan kertoma
console.log(factorial);

tehtävä 5

// Käydään läpi luvut 1-100
for (let i = 1; i <= 100; i++) {
    // Tarkistetaan, onko luku jaollinen kolmella ja/tai viidellä
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("hipheijaa");
    } else if (i % 3 === 0) {
      console.log("hip");
    } else if (i % 5 === 0) {
      console.log("heijaa");
    } else {
      console.log(i);
    }
  }

  tehtävä 6

// Käydään läpi luvut 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  tehtävä 7

  // Alustetaan muuttuja summa
let summa = 0;

// Käydään läpi luvut 1-10 ja lasketaan summa
for (let i = 1; i <= 10; i++) {
  summa += i;
}

// Tulostetaan summa
console.log(summa);

tehtävä 8

// Pyydetään käyttäjältä kaksi lukua
let input1 = prompt("Syötä ensimmäinen luku:");
let input2 = prompt("Syötä toinen luku:");

// Muutetaan käyttäjän syötteet numeroiksi
let number1 = parseInt(input1);
let number2 = parseInt(input2);

// Lasketaan ensimmäinen luku potenssiin toinen
let tulos = Math.pow(number1, number2);

// Tulostetaan tulos
console.log(tulos);

tehtävä 9

// Alustetaan taulukko luvuilla
let luvut = [5, 12, 8, 3, 9];

// Alustetaan muuttujat suurimmalle ja pienimmälle luvulle
let suurin = luvut[0];
let pienin = luvut[0];

// Käydään läpi taulukon luvut ja etsitään suurin ja pienin luku
for (let i = 1; i < luvut.length; i++) {
  if (luvut[i] > suurin) {
    suurin = luvut[i];
  }
  if (luvut[i] < pienin) {
    pienin = luvut[i];
  }
}

// Tulostetaan suurin ja pienin luku
console.log("Suurin luku: " + suurin);
console.log("Pienin luku: " + pienin);

tehtävä 10

// Pyydetään käyttäjältä sana
let input = prompt("Syötä sana:");

// Muutetaan sana salasanaksi
let password = "";
for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    password += input.charAt(i);
  } else {
    // Arvotaan satunnainen kirjain
    let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    password += randomChar + input.charAt(i);
  }
}

// Tulostetaan salasana
console.log(password);

tehtävä 11

// Pyydetään käyttäjältä kaksi lukua
let input1 = prompt("Syötä ensimmäinen luku:");
let input2 = prompt("Syötä toinen luku (isompi kuin ensimmäinen):");

// Muutetaan käyttäjän syötteet numeroiksi
let number1 = parseInt(input1);
let number2 = parseInt(input2);

// Tarkistetaan, että toinen luku on isompi kuin ensimmäinen
if (number2 <= number1) {
  console.log("Toisen luvun tulee olla isompi kuin ensimmäisen.");
} else {
  // Alustetaan muuttujat parillisille ja parittomille luvuille sekä niiden sumille
  let parilliset = "";
  let parittomat = "";
  let parillisetSumma = 0;
  let parittomatSumma = 0;

  // Käydään läpi luvut ensimmäisestä toiseen ja erotellaan parilliset ja parittomat luvut
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      parilliset += i + " ";
      parillisetSumma += i;
    } else {
      parittomat += i + " ";
      parittomatSumma += i;
    }
  }

  // Tulostetaan parilliset ja parittomat luvut sekä niiden summat
  console.log("Parilliset luvut: " + parilliset);
  console.log("Parillisten lukujen summa: " + parillisetSumma);
  console.log("Parittomat luvut: " + parittomat);
  console.log("Parittomien lukujen summa: " + parittomatSumma);
}