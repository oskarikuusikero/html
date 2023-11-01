let arvottuLuku = Math.floor(Math.random() * 10) + 1;

let arvauskerrat = 0;
let oikeatArvaukset = 0;

while (arvauskerrat < 3) {
  
  let arvaus = prompt("Arvaa luku väliltä 1-10:");

  if (arvaus == arvottuLuku) {
    console.log("Onneksi olkoon, arvasit oikein!");
    oikeatArvaukset++;
    break;
  } else {
    console.log("Valitettavasti arvasit väärin.");
    if (arvaus > arvottuLuku) {
      console.log("Arvaamasi luku on suurempi kuin oikea luku.");
    } else {
      console.log("Arvaamasi luku on pienempi kuin oikea luku.");
    }
    arvauskerrat++;
  }
}

if (arvauskerrat == 3) {
  console.log("Arvauskerrat loppuivat. Oikea luku oli " + arvottuLuku + ".");
}

console.log("Oikeiden arvausten määrä: " + oikeatArvaukset);