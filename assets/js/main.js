// array methodes lvl 1
//lv1_1_1
let adresse = ["xstraße", 12345, "Oberhausen"];
let besteFreunde = ["Mai", "Khaled", "Lulu"];
let person = ["sara", "Al Awad", "sara", 28, "lesen", "Syrian", "SuperCode"];
console.log(adresse);
console.log(person);
console.log(besteFreunde);
person.push("this is the array adresse inside person " + adresse);
console.log(person);

//lev 1_1_2
console.log(person.length);
console.log(adresse.length);
console.log(besteFreunde.length);
//lev 1_2
let meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"]
let meineTrainer2 = new Array("Eric", "Steffen", "Simon", "Ahmed");
let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";

console.log(meineTrainer1);
console.log(meineTrainer2);
console.log(meineTrainer3);
// lev1_3 arrays index
let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray[0]);//5
console.log(numberArray[5])//10
console.log(numberArray.length) //6
//lev1_4
//The split() method divides a String into an ordered list of substrings,
// puts these substrings into an array, and returns the array. 
// The division is done by searching for a pattern; 
//where the pattern is provided as the first parameter in the method's call.
let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = " Heute ist ein großer Tag für uns.";
let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");
console.log(split1);
console.log(split2);
console.log(split3);

//lev 1_5 Array push
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
let totalSongs = songs.push("Sweet Child O'Mine");
console.log(totalSongs);//!!! why the output is 4
console.log(songs)

let besteFussballerAllerZeiten = ["Michel Platini", " Johan Cruyff", "Ronaldo Nazario", "Zinedine Zidane", "Cristiano Ronaldo"]
besteFussballerAllerZeiten.push("Manuel Neuer");
besteFussballerAllerZeiten.push(" Alisson");
besteFussballerAllerZeiten.push("Jan Oblak");
console.log(besteFussballerAllerZeiten)
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists);
// Lev 1_5_2 !!
let heroUndEnemy = [
    ["Batman, The Joker"],
    ["Professor X, Magneto"],
    ["Thor, Loki"]]
console.log(heroUndEnemy);
heroUndEnemy.push(["Superman,Lex Luthor"], ["Plastic Man,Doctor Dome"]);
console.log(heroUndEnemy)

// lev 1_6 arrays pop()
let entfernterSong = songs.pop();
console.log(entfernterSong);
console.log(songs)
let entfernterFussballer = besteFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
console.log(besteFussballerAllerZeiten);
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);
// lev 1.7 Arrays unshift
let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
deutscheGerichte.unshift("Bratwurst"); // add to start
console.log(deutscheGerichte);
let nichtGut = deutscheGerichte.shift();
nichtGut = deutscheGerichte.shift();
nichtGut = deutscheGerichte.shift();
console.log(nichtGut)
console.log(deutscheGerichte)

// Lev 1_9 Push Pop Shift Unshift Difference
let numbers = [23, 54, 75]
console.log(numbers);
numbers.push(1, 2, 3, 4, 5);
console.log(numbers);
numbers.unshift(6, 7, 8, 9, 10);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers)
numbers.shift();
numbers.shift();
console.log(numbers)

// lev1_10 Arrays delete with splice()
// Für das Hinzufügen von Elementen: array.splice (Index, Anzahl der Elemente, Element).
// Zum Entfernen von Elementen: array.splice (Index, Anzahl der Elemente).
let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let delImg1 = array.splice(4, 4);
console.log(delImg1);
console.log(array);
let delImg2 = array.splice(6, 5);
console.log(delImg2);
console.log(array);
let delImg3 = array.splice(2);
console.log(delImg3);
console.log(array);

//lev 1-11 Elemente hinzufügen mit splice()
// array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
array.splice(2, 3, "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg");

console.log(array);
array.splice(5, 6, "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg")

console.log(array);
array.splice(0, 20, "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");
console.log(array);

console.log(array);
// Arrays slice()
// Die slice() Methode kopiert einen bestimmten Teil eines Arrays und gibt
// diesen kopierten Teil als neues Array zurück. Es ändert nicht das ursprüngliche Array.
let copyImg1 = array.slice(7, 15);
console.log(copyImg1);
console.log(array)
let copyImg2 = array.slice(6, 12);
console.log(copyImg2);
console.log(array)