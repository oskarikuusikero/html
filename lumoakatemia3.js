function laskeSumma(a, b){
   return a +b;
}
console.log(laskeSumma);

function nelionAla(sivu){
    return sivu * sivu;
}
console.log(nelionAla);

function ympyranAla(sade){
    return Math.PI * sade * sade;
}
console.log(ympyranAla);

/*
function laskeKeskiarvo(taulukko){
const summa = 0;
for(let i = 0; i < taulukko.length-1; i++){
    summa += i;
}
return summa / taulukko.length;
}
console.log(laskeKeskiarvo([1,2,3,4,5]));
*/

function onkoParillinen(luku){
    return luku % 2 === 0;
}

funtion laskeMerkkienPituus(merkkeja){
    return merkkeja.length;
}

function onkoMerkkijonoTyhja(merkkijono){
    return merkkijono === "";
}

function laskeSuurin(taulukko){
    return Math.max(...taulukko);
}

function laskePienin(taulukko){
    return Math.min(...taulukko);
}
/* ?
function laskeTaulukonSumma(taulukko){
    return taulukko.reduce((acc, numero) => acc + numero, 0);
}*/ 

function laskePotenssi(kantaluku, exponentti){
    return Math.pow(kantaluku, exponentti);
}

/* 
function onkoAlkuluku(luku){
    if (luku <= 1) return false;
    if (luku <= 3) return true;
    if (luku % 2 === 0 || luku % 3 === 0) return false;
    let i = 5;
       while (i * i <= luku){
        if (luku % i === 0 || luku % (i + 2) === 0) return false;
        i += 6;
       }
       return true;
} */

function kaannaMerkkijono(merkkijono){
     merkkijono = merkkijono.split().reverse();
     return merkkijono;
}
/* 
function onkoPalindromi(sana){
     if (sana.split('').reverse().join('') === sana){
return true;
    } 
    else{
        return false;
    }
    
}*/

function onkoPalindromi(sana){
   const kaannettuSana = sana.split('').reverse().join('');
   return sana === kaannettuSana;
}

function onkoAnagrammi(sana, sana2){
    const sanaJarjestettu = sana.split('').sort().join('');
    const sana2Jarjestettu = sana2.split('').sort().join('');
    return sanaJarjestettu === sana2Jarjestettu;
}

function karkausVuosi(vuosi){
    return (vuosi % 4 === 0 && vuosi % 100 !== 0);
}

function muutaEkaKirjainIsoksi(sana){
    return sana.charAt(0).toUpperCase() + sana.slice(1);
}

