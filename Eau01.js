

let concatNumber = (inputCarac, inputCumul) => inputCumul + inputCarac;

let arrayToString = (myArray) => {
    //on transforme le tableau en chaine ['1','0','2'] devient '102'
    let numberComposed = '';
    for (var i = 0, len = myArray.length; i < len; i++) {
        numberComposed = concatNumber(myArray[i], numberComposed);
    }
    return numberComposed;
};

let combinaisonExist = (inputCombinaison, inputArrNumbers) => {
    //on contrôle si la combinaison existe déjà dans le tableau des chiffres valide
    if (inputArrNumbers.indexOf(inputCombinaison) === -1) {
        return false;
    } else {
        return true;
    }
};

let nbOccurence = (inputStringNumber) => {
    //Pour un chiffre, on contrôle si il y a des nombres identique
    let stringToArray = inputStringNumber.split('');
    let nbOccurence = 0;

    for (let i = 0; i < stringToArray.length; i++) {
        if (stringToArray.indexOf(stringToArray[i]) !== stringToArray.lastIndexOf(stringToArray[i])) {
            nbOccurence++;
            break;
        }
    }
    if (nbOccurence > 0) {
        return false;
    } else {
        return true;
    }
};

let addValidString000To999 = () => {
    //on ajoute dans un tableau, les chiffre de 1 à 999 au format '001'
    //on exclut les chiffres ayant plus de 2 nombres identiques, exemple : 002
    let arrayNumbers = new Array;
    let isValidNumber = true;
    for (let index = 0; index < 999; index++) {
        let numberToString = '';
        numberToString = index.toString(); 
        numberToString = numberToString.padStart(3, '0'); //1 devient 001

        // if (numberToString == '012') {
        //     let test1 = ''
        // }
        isValidNumber = nbOccurence(numberToString)

        if (!isValidNumber) {
            continue;
        }
        arrayNumbers.push(numberToString);
    }
    return arrayNumbers;
};

let combinaisonAlreadyExists = (inputNumber, inputArray) => {
    //on parcours chaque nombre du chiffre pour le déplacer et calculer des combinaisons possible 
    //Exemple, le chiffre 789, en déplacant le nombre 7, donne :
    //  789
    //  879
    //  897
    // ...
    let myNumberFormated = inputNumber.split(''); //on convertie la chaine en tableau 
    let shouldPass = false;
    let combinaison = '';
    let combinaisonReverse = '';

    //on va déplacer chaque nombre du chiffre
    // Exemple pour 789, on va déplacer le nombre 7, puis le nombre 8, puis le nombre 9 pour créer des combinaisons
    for (let numberToMove = 0; numberToMove < myNumberFormated.length; numberToMove++) {
        if (shouldPass) {
            //on a déjà trouvé une combinaison qui existe donc inutile de continuer à traiter ce chiffre 
            //Exemple : 021 donne la combinaison 012 et 012 est déjà présent dans la liste des nombres valide
            break;
        }
        //seconde boucle pour obtenir la position sur laquelle déplacer le numberToMove
        // Exemple, on déplace le nombre 7, en position 0 puis 1 puis 2
        for (let pos = 0; pos < myNumberFormated.length; pos++) {

            let arrayCombinaison = myNumberFormated.slice(); //on copie le tableau pour le manipuler librement en conservant l'ancien d'origine
            let numberDeleted = arrayCombinaison.splice(numberToMove, 1); //on supprime le nombre à bouger du tableau pour le réinserer dans une nouvelle position (attention numberDeleted est un tableau)
            arrayCombinaison.splice(pos, 0, numberDeleted.toString()); //on insère le nombre supprimé dans sa nouvelle position pour créer une combinaison Exemple 789->879

            combinaison = '';
            combinaisonReverse = '';
            combinaison = arrayToString(arrayCombinaison); // on transforme le combinaison (Array) crée en String    

            shouldPass = combinaisonExist(combinaison, inputArray) // on contrôle si la combinaison crée, existe dans la liste totale des chiffres valide
            if (!shouldPass) {
                //si la combinaison n'existe pas, on teste la même combinaison en reverse : cas du  987, il faut tester aussi 789 qui est déjà présent
                arrayCombinaison.reverse()
                combinaisonReverse = arrayToString(arrayCombinaison)
                shouldPass = combinaisonExist(combinaisonReverse, inputArray)
            }
            if (shouldPass) {
                //on a trouvé une combinaison qui existe donc inutile de continuer à traiter ce chiffre 
                break;
            }
        }
    }
    return shouldPass
};

let addValidNumbers = () => {
    let arrAllNumbers = new Array;
    let arrFinalResult = new Array;

    arrAllNumbers = addValidString000To999();

    for (let index = 0; index < arrAllNumbers.length; index++) {

        if (!combinaisonAlreadyExists(arrAllNumbers[index],arrFinalResult) ) {
            //si le chiffre et ses combinaisons possible n'existe pas dans le tableau, on l'ajoute
            arrFinalResult.push(arrAllNumbers[index]);
        }
    }
    arrFinalResult.sort(); //on trie le tableau
    return arrFinalResult;
};

let arrayValidNumbers = addValidNumbers();
//affichage du résultat
arrayValidNumbers.forEach(e => console.log(e));






