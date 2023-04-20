/* Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error
 */

let isValidInput = (inputArgs) => {
    
    let firstParam = parseInt(inputArgs[0])
    let secondParam = parseInt(inputArgs[1])

    if ( ( isNaN(firstParam) || isNaN(secondParam) ) ){
        return false;
    } else {
        if (firstParam === secondParam) {
            return false;
        } 
    }

    return true;

};

let returnMinMax = (inputArgs) => {

    let min=0
    let max=0
    let arrayNumber = [];

    min=parseInt(inputArgs[0])
    max=parseInt(inputArgs[1])

    if ( min > max ) {
        min = parseInt(inputArgs[1])
        max = parseInt(inputArgs[0])
    }

    for (let i = min; i < max; i++) {
        arrayNumber.push(i)
    }

    return arrayNumber;

}


if (isValidInput(process.argv.slice(2))) {
    let listOfNumbers = [] = returnMinMax(process.argv.slice(2))
    console.log(listOfNumbers)
} else {
    console.log("error")
}
