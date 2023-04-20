/* Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

 */

let isValidInput = (inputArgs) => {
    
    return (inputArgs.length <= 1) ? false : true

};

let isolateArgs = (inputArgs) => {
    let listOfArgs = []
    let maxIndex = inputArgs.length - 1
    let elementToSearch = ""

    //on isole tous les arguments sauf le dernier dans un tableau
    //on isole le dernier élément
    for (let i = 0; i <= maxIndex; i++) {
        if (i < maxIndex) {
            listOfArgs.push(inputArgs[i])
        } else {
            elementToSearch = inputArgs[i]
        }
    }

    return { listArgs: listOfArgs, searchTerm: elementToSearch }

};

let returnIndex = (inputArray, inputString) => {

    let indexMatch = -1

    for (let j = 0; j < inputArray.length; j++) {

        if (inputArray[j] === inputString) {
            indexMatch = j
            break
        }

    }

    return indexMatch
};

let displayIndexWanted = (inputArgs) => {

    if (isValidInput(inputArgs)) {

        let isolateResult = isolateArgs(inputArgs);
        let myIndex = returnIndex(isolateResult.listArgs, isolateResult.searchTerm);

        console.log(myIndex)

    } else {

        console.log("Error")

    }

};

displayIndexWanted(process.argv.slice(2));



