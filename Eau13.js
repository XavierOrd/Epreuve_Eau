/* Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.
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
            return false
        }
    }

    return true;
};

let my_bubble_sort = (inputArray) => {
    
    let maxIndex = inputArray.length-1
    let sortComplete = false
    let saveArg=0
    
    while (!sortComplete) {
        sortComplete = true
        for (let i = 0; i < maxIndex; i++) {
    
            if (inputArray[i] > inputArray[i+1]) {

                saveArg = inputArray[i]

                inputArray[i] = inputArray[i+1]
                inputArray[i+1] = saveArg
    
                sortComplete = false
            }
    
        }
        maxIndex-=1
    }

    return inputArray
};


if (isValidInput(process.argv.slice(2))) {

    let arraySorted = [] = my_bubble_sort(process.argv.slice(2))
    console.log(arraySorted)

} else {

    console.log("erreur")

}