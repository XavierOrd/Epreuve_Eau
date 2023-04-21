
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

let my_select_sort = (inputArray) => {
   
    let maxIndex = inputArray.length - 1
    let saveArg = 0
    let indexMini = 0

    for (let i = 0; i < maxIndex; i++) {

        indexMini = i

        for (let j = i + 1; j <= maxIndex; j++) {

            if (inputArray[j] < inputArray[indexMini]) {
                indexMini = j
            }

        }

        if (indexMini !== i) {

            saveArg = inputArray[i]
            inputArray[i] = inputArray[indexMini]
            inputArray[indexMini] = saveArg

        }

    }

    return inputArray
}


if (isValidInput(process.argv.slice(2))) {

    let arraySorted = [] = my_select_sort(process.argv.slice(2))
    console.log(arraySorted)

} else {

    console.log("erreur")

}
