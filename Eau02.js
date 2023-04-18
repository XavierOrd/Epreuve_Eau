
//permet de contrôler si pour deux valeurs exemple 00 et 99 existe sous format :
// 00 99 OU 99 00

let combinaisonExists = (value1, value2, array) => {

  var returnVal = false;
  var ind;
  for (ind = 0; ind < array.length; ind++) {
    if ((array[ind][0] == value1 && array[ind][1] == value2) || (array[ind][0] == value2 && array[ind][1] == value1)) {
      returnVal = true;
      break;
    }
  }
  return returnVal;
  
};

let addValidString00To99 = () => {
  //on ajoute dans un tableau, les chiffre de 1 à 999 au format '01'
  //on exclut les chiffres ayant plus de 2 nombres identiques, exemple : 02
  let arrayNumbers = new Array;
  for (let index = 0; index < 100; index++) {
    let numberToString = '';
    numberToString = index.toString();
    numberToString = numberToString.padStart(2, '0'); //1 devient 01
    arrayNumbers.push(numberToString);
  }
  return arrayNumbers;
};

let addCombinaisons = () => {

  let arrayCombinaisons = [];  //Tableaux multidimentionnel de deux colonne avec toutes les combinaisons 00(colonne1) 01(colonne2)
  let listOfNumbers = addValidString00To99();
  //on fait deux boucles, pour chaque chiffre, on fait les combinaisons 00 00 puis 00 01 puis 00 02 etc
  for (let i = 0; i < listOfNumbers.length; i++) {
    for (let j = 0; j < listOfNumbers.length; j++) {

      //Permet d'éviter les combinaisons de deux chiffres identique Ex : 99 99 
      if (listOfNumbers[i] == listOfNumbers[j]) {
        continue;
      }

      //contrôle si la combinaison existe déjà Ex : 00 99 ou 99 00
      if (!combinaisonExists(listOfNumbers[i], listOfNumbers[j], arrayCombinaisons)) {
        arrayCombinaisons.push([listOfNumbers[i], listOfNumbers[j]]);
      }

    }
  }

  return arrayCombinaisons;
};

let arrayFinalResult = [] = addCombinaisons();  //Tableaux multidimentionnel de deux colonnes avec toutes les combinaisons 00(colonne1) 01(colonne2)
//affichage du résultat sans limite de longeur dans le terminal
console.dir(arrayFinalResult, { 'maxArrayLength': null }); 

