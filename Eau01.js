

let concatNumber = (letter, cumul) => cumul + letter;

let arrayToString = (myArray) => {
    let numberComposed = '';
    for (var i = 0, len = myArray.length; i < len; i++) {
        numberComposed = concatNumber(myArray[i], numberComposed);
    }
    return numberComposed
};

let combinaisonExist = (combinaison, tabListeNB) => {
    //pour chaque caractère du chiffre, on contrôle le nombre de fois où il est présent 
    if (tabListeNB.indexOf(combinaison) === -1) {
        return false;
    } else {
        return true;
    }
};

function nbOccurence(chaineComplete) {
    let numberToArray = chaineComplete.split('');
    let nbOccurence = 0;
    for (let i = 0; i < numberToArray.length; i++) {
        if (numberToArray.indexOf(numberToArray[i]) !== numberToArray.lastIndexOf(numberToArray[i])) {
            nbOccurence++;
            break;
        }
    }
    if (nbOccurence > 0) {
        return false
    } else {
        return true
    }
};

function addValidNumbers0To999() {
    let arrayNumbers = new Array;
    for (let index = 0; index < 999; index++) {
        let nbFormate = '';
        nbFormate = index.toString();

        nbFormate = nbFormate.padStart(3, '0');

        if (nbFormate == '012') {
            let test1 = ''
        }
        if (nbFormate == '987') {
            let test = ''
        }

        let concerveNumber = nbOccurence(nbFormate)

        if (!concerveNumber) {
            continue;
        }
        arrayNumbers.push(nbFormate);
    }
    return arrayNumbers;
};

let isExistsCombinaison = (inputNumber, inputArray) => {
    //on parcours chaque nombre de la chaine pour le déplacer et calculer des combinaisons possible 
    //Exemple, le chiffre 789 donne :
    //  789
    //  879
    //  897
    // ...
    let myNumberFormated = inputNumber.split(''); //on convertie la chaine en tableau 
    let nb = 0
    let shouldPass = false;
    let combinaison = '';
    let combinaisonReverse = '';

    for (let numberToMove = 0; numberToMove < myNumberFormated.length; numberToMove++) {
        if (shouldPass) {
            //on a déjà trouvé une combinaison qui existe donc inutile de continuer à traiter ce chiffre 
            //Exemple : 021 n’est pas là parce que 012 est présent
            break;
        }
        //seconde boucle pour obtenir la position sur laquelle déplacer le numberToMove
        for (let pos = 0; pos < myNumberFormated.length; pos++) {

            let nouveauTableau = myNumberFormated.slice(); //on copie le tableau pour le manipuler librement en conservant l'ancien
            let numberDeleted = nouveauTableau.splice(numberToMove, 1); //on supprime le nombre à bouger du tableau pour le réinserer dans une nouvelle position 
            nouveauTableau.splice(pos, 0, numberDeleted.toString()); //on insère le nombre supprimé dans sa nouvelle position pour créer une combinaison Exemple 789->879

            combinaison = '';
            combinaisonReverse = '';
            combinaison = arrayToString(nouveauTableau); // on transforme le combinaison (Array) crée en String    

            shouldPass = combinaisonExist(combinaison, inputArray) // on contrôle si la combinaison crée, existe dans la liste totale des chiffres
            if (!shouldPass) {
                //si la combinaison ne passe pas, on teste la même combinaison en reverse : cas du  987, il faut tester aussi 789 
                nouveauTableau.reverse()
                combinaisonReverse = arrayToString(nouveauTableau)
                shouldPass = combinaisonExist(combinaisonReverse, inputArray)
            }
            if (shouldPass) {
                break;
            }

        }
    }
    return shouldPass
};

let addValidNumbers = () => {
    let tabAllNumbers = new Array;
    let tabListeNB = new Array;

    tabAllNumbers = addValidNumbers0To999();

    for (let index = 0; index < tabAllNumbers.length; index++) {

        if (!isExistsCombinaison(tabAllNumbers[index],tabListeNB) ) {
            //si le chiffre et ses combinaisons possible n'existe pas dans le tableau, on l'ajoute
            tabListeNB.push(tabAllNumbers[index]);
        }

    }
    tabListeNB.sort(); //on trie le tableau
    return tabListeNB;
};

let arrayValidNumbers = addValidNumbers();
//affichage du résultat
arrayValidNumbers.forEach(e => console.log(e));






