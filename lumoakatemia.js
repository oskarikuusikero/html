 function heiMaailma {
    console.log("Hei maailma!");
}
heiMaailma()

function yhteenLasku(a, b){
 console.log(a + b);
}

function erotusLasku{
    console.log(2 - 3);
}

function tuloLasku {
    console.log(2 * 3);
}

function jakoLasku {
    console.log(3 / 3);
}

function celsiusFahren(celsius){
    return celsius = 9/5 + 32;
}


function fahrenCelsius(fahrenheit){
    return fahrenheit = (-32 * 1.8);
}

function mileKilo(mile){
    return mile = mile / 1.609344;

} 

function kiloMile(kilo){
    kilo = kilo / 1.609344;
    return kilo;
}

function kiloMile(mile){
    mile = mile * 1.609344;
    return mile;
}

function tuumaSentti(sentti){
    sentti = sentti * 2.54;
    return sentti;
}

function senttiTuuma(tuuma){
    tuuma = tuuma / 2.54;
    return tuuma;
}

function yardMetri(yard){
    yard = yard * 0.9144;
    return yard;
}

function metriYard(metri){
    metri = metri / 0.9144;
    return metri;
}

/*function asciiArvo(kirjain){
    kirjain = kirjain.charCodeAt(0);
    return kirjain; ????
    
}*/

function ympyränAla(säde){
     säde = 2 * 3.14 * säde;
     return säde;
}

function neliönAla(sivu){
    sivu = sivu * sivu;
    return sivu;
}

function suorakulmanAla(leveys, pituus){
    let ala = leveys * pituus;
    return ala;
}

/* function päiväMuuntaja(päivät){
    let vuodet = päivät / 365;
    
    return vuodet;
}*/

function suurempiLuku(a, b){
    if (a > b) {
return a;
    } else if (a < b){
        return b;
    } else return (console.log("yhtäsuuri"));
    
}

function suurinLuku(a, b, c){
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else return c;
}

function posVaiNega(luku){
   if (luku > 0){
      console.log("Positiivinen");
   } else if (luku < 0){
      console.log("Negatiivinen");
   } else if (luku == 0){
      console.log("Nolla!")
   }
}

function lukuTarkistus(num){
    if (num / 5 == 1 | num / 11 == 1){
        console.log("On jaollinen!");
    } else console.log("Ei jaollinen");
}

/* function karkausVuosi(vuosi){
    if (vuosi / 4 == 4 && vuosi / 100 != ){
        console.log("Karkausvuosi");
    } else console.log("Normivuosi");
} */



//ohjelma joka kysyy käyttäjältä kaksi kokonaislukua ja kertoo ovatko luvut samat vai eri suuret.
let luku1 = parseInt(prompt("Syötä ensimmäinen kokonaisluku:"));
let luku2 = parseInt(prompt("Syötä toinen kokonaisluku:"));

if (luku1 === luku2) {
  console.log("Luvut ovat samat.");
} else {
  console.log("Luvut eivät ole samat.");
}
