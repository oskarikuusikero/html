/*function Henkilo(enimi, snimi, ika) {
    this.enimi = enimi;
    this.snimi = snimi;
    this.ika = ika;
}

let uusTyyppi = new Henkilo("Risto","Reipas",11);
console.log(uusTyyppi);

function NaytaTiedot(){
    console.log(uusTyyppi);
}*/

class Henkilo {
    constructor(etunimi, sukunimi, ika){
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
}

const risto = new Henkilo("Risto","Reipas", 10);
console.log(risto.ika);

risto.sukunimi = "Reippaampi";
risto.ika = 11;

console.log(risto.sukunimi);

/*class Henkilo {
    constructor(etunimi, sukunimi, ika){
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
    NaytaTiedot(){
        console.log("Etunimi", this.etunimi);
        console.log("Sukunimi", this.sukunimi);
        console.log("Ikä", this.ika);
    }
}*/



class Kuvakirja {
    constructor(sivumaara = 16){
        this.sivujenluku = sivumaara;
    }
    haeSivumaara(){
        return this.sivujenluku;
    }
}

class Elain {
    constructor(nimi = "kana"){
        this.nimi = nimi;
    }

    get nimi(){
        return this.nimi;
    }

    set nimi(uusiNimi){
        this.nimi = uusiNimi;
    }
    Syo(){
        console.log(this.nimi + " syö - omnomomom mnom nom")
    }
}

class Koira extends Elain {
    constructor(nimi = "", tassut = 4, turkki = ""){
        this.nimi = nimi;
        this.tassut = tassut;
        this.turkki = turkki;
    }
}

get tassut(){
    return this.tassut;
}

get turkki(){
    return this.turkki;
}

set tassut(uusiTassu){
this.tassut = uusiTassu;
}

set turkki(uusiTurkki){
    this.turkki = uusiTurkki;
}

aantelehtii(aani){
    console.log(this.nimi + "" + aani);
}


/*const kana = new Elain();

kana.nimi = "kaakattaja";
console.log("Uusi nimi: " + kana.nimi);
kana.Syo();
*/

class Ajoneuvo {
    constructor(merkki, malli, vuosi)
    this.merkki = merkki;
    this.malli = malli;
    this.vuosi = vuosi;
}

get merkki(){
    return this.merkki;
}
get malli(){
    return this.malli;
}
get vuosi(){
    return this.vuosi;
}

set merkki(uusiMerkki){
    this.merkki = uusiMerkki;
}
set malli(uusiMalli){
    this.malli = uusiMalli;
}
set vuosi(uusiVuosi){
    this.vuosi = uusiVuosi;
}

aja(){
 console.log(this.merkki + this.malli + "" + "ajaa.")
}

kiihdytä(){
    console.log(this.merkki + this.malli + "" + "kiihdyttää.")
}
jarruta(){
    console.log(this.merkki + this.malli + "" + "jarruttaa.")
}
kaynnista(){
    console.log(this.merkki + this.malli + "" + "käynnistää.")
}
sammuta(){
    console.log(this.merkki + this.malli + "" + "sammuttaa.")
}

class Auto extends Ajoneuvo {
 constructor(merkki, malli, vuosi, pyorat = 4);
 this.pyorat = pyorat;
}

class Moottoripyora extends Auto {
    constructor(merkki, malli, vuosi, pyorat = 2);
}

class TestiAjo {
    constructor(){
        const mersu = new Auto("MercedesBenz", "E", 2006);
        mersu.aja();
    }
}



class Pankkitili {
    constructor(){
        this.saldo = 0;
    }
talleta(maara){
    if (maara > 0){
        this.saldo + maara;
        console.log("Uusi saldo" + "" + this.saldo);
    }
    else {
        console.log("Virheellinen summa!")
    }
}

nosta(maara){
    if (maara > 0){
        if (maara <= this.saldo){
            this.saldo -= maara;
            console.log("Uusi saldo" + "" + this.saldo);
        } else{
            console.log("Määrä ylittää saldon");
        } else{
            console.log("Virheellinen määrä!")
        }
        
    }
}
}


class Elain{
    constructor(nimi){
        this.nimi = nimi;
    }
}

class Koira extends Elain{
    aanesta(){
        console.log("Woof woof!");
    }
}

class Kala extends Elain{
    aanesta(){
        console.log("Bulp bulp!");
    }
}

class Lintu extends Elain{
    aanesta(){
        console.log("Kwaak kwaaak!");
    }
}



class Kirja{
    constructor(nimi, kirjailija){
        this.nimi = nimi;
        this.kirjailija = kirjailija;
    }
}

class Kirjasto {
    constructor(){
        this.kirjat = [];
    }

    lisaaKirja(kirja){
        this.kirjat.push(kirja);
    }

    /*
    haeKirjat(kirjailija){
        return this.kirjat.filter(kirja => kirja.kirjailija === kirjailija );
    }*/
}