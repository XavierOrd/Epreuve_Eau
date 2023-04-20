/* Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.


Exemples d’utilisation :
$> python exo.py 5 1 19 21
2


$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

let isValidInput = (inputArgs) => {
    let param = 0

    if (inputArgs.length <= 1) {
        return false
    }

    //si on trouve pas un chiffre c'est pas bon 
    for (let k = 0; k < inputArgs.length; k++) {
        param = parseInt(inputArgs[k])
        if (isNaN(param)) {
            //on ne contrôle pas les espaces 
            return false
        }
    }

    return true;
};


let returnMinimum = (inputArgs) => {

    let numberChildren =0
    let resultMini = 0
    let count = 0
    let calcul = 0
    let numberParent = 0

    for (let i = 0; i < inputArgs.length; i++) {

        numberParent = parseInt(inputArgs[i])

        for (let j = i + 1; j < inputArgs.length; j++) {

            count++

            numberChildren = parseInt(inputArgs[j])
            calcul = (numberParent - numberChildren)
            //valeur absolue
            if (calcul < 0) {
                calcul = -calcul
            }

            if (count === 1) {
                resultMini = calcul
            } else {

                if (calcul < resultMini) {
                    resultMini = calcul
                }

            }

        }

    }
    
    return resultMini

};

if (isValidInput(process.argv.slice(2))) {

    let mini = returnMinimum(process.argv.slice(2))
    console.log(mini)

} else {

    console.log("erreur")

}








