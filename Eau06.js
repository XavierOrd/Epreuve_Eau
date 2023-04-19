
let returnPositionLetter = (inputLetter, inputSentence, inputIndexStart) => {
    //retourne la position d'une lettre dans une phrase, possibilité de commencer la recherche à partir de inputIndexStart
    let pos = -1
    let posStart = (inputIndexStart > 0) ? inputIndexStart + 1 : inputIndexStart;

    for (let i = posStart; i < inputSentence.length; i++) {
        if (inputSentence[i].toLowerCase() === inputLetter.toLowerCase()) {
            pos = i;
            break;
        }
    }

    return pos

};

let isValidInput = (inputArgs) => {
    
    let sentence = inputArgs[0]
    let word = inputArgs[1]

    if ((sentence == undefined) || (word == undefined)) {
        console.log("Error");
        return false;
    };

    return true;

};

let isStringIntoString = (inputArgs) => {

    let inputSentence = inputArgs[0]
    let inputWord = inputArgs[1]
    let sentenceLength = inputSentence.length;
    let wordLength = inputWord.length;
    let pos = 0
    let firstLetterWord = inputWord[0];
    let completeEquality = false;
    //on recherche si la première lettre du mot est présente dans la phrase
    //on continue tant qu'on trouve la 1ère lettre du mot dans la phrase et tant qu'on a pas trouvé le mot complet
    while (pos !== -1 && !completeEquality) {

        pos = returnPositionLetter(firstLetterWord, inputSentence, pos)
        if (pos > -1) {

            let posSuiv = pos
            completeEquality = true

            for (let j = 1; j < wordLength; j++) {
                //on a trouvé la 1ère lettre du mot dans la phrase
                //on regarde si la suite du mot est présent en totatilité dans la phrase
                posSuiv++
                if ((posSuiv > sentenceLength - 1) || (inputWord[j].toLowerCase() !== inputSentence[posSuiv].toLowerCase())) {
                    //si on trouve une différence de lettre ou si on dépasse la longueur de la phrase on sort
                    completeEquality = false;
                    break;
                }

            }

        }

    }

    if (completeEquality) {
        return true;
    } else {
        return false;
    }
    
};

if ( isValidInput(process.argv.slice(2)) ) {
    console.log( isStringIntoString(process.argv.slice(2)) )
}

