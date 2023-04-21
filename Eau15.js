
let my_select_sort_ascii = (inputArray) => {

    let saveArg = ""
    let indexMini

    //parcours de chaque mot
    for (let numArg = 0; numArg < inputArray.length - 1; numArg++) {

        indexMini = numArg

        //on parcours les autres mots après celui en cours
        for (let numNextArg = numArg + 1; numNextArg <= inputArray.length - 1; numNextArg++) {


            let sortWordComplete = false
            //on compare chacune des lettres du mot i et mot i+1
            //si on trouve une différence, on arrête le parcours et on récupère le mot le plus petit
            while (!sortWordComplete) {

                sortWordComplete = true

                for (let indexL = 0; indexL < inputArray[numArg].length; indexL++) {

                    if (inputArray[numNextArg][indexL] == undefined) {
                        //si mot i+1 est plus court, alors c'est lui le plus petit
                        //Exemple Mohamed vs Moha
                        indexMini = numNextArg
                        break
                    }

                    let letterCurrentWord = inputArray[indexMini][indexL]
                    let letterNextWord = inputArray[numNextArg][indexL]

                    if (letterNextWord < letterCurrentWord) {
                        indexMini = numNextArg
                        break
                    }
                    if (letterCurrentWord < letterNextWord) {
                        //Le mot est déjà dans le bonne ordre, inutile d'aller plus loin
                        break
                    }

                }
            }

        }

        if (indexMini !== numArg) {
            //on permute pour avoir les mots dans le bon ordre
            saveArg = inputArray[numArg]
            inputArray[numArg] = inputArray[indexMini]
            inputArray[indexMini] = saveArg
        }

    }

    return inputArray
}


let arraySorted = [] = my_select_sort_ascii(process.argv.slice(2))
console.log(arraySorted)



