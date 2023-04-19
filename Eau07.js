let isValidInput = (inputArgs) => {
    
    let sentence = inputArgs[0]

    if (sentence == undefined) {
        return false;

    } else {
        //si on trouve un chiffre c'est pas bon 
        for (let j = 0; j < sentence.length; j++) {
            if (sentence[j] === " ") {
                continue
            }
            if ( !isNaN(sentence[j]) ) {
                return false;
            }
        }
    }

    return true;

};

let formateLetter = (inputLetter, inputMode) => {

    const ASCII_CHAR_A_LOWER=97;
    const ASCII_CHAR_Z_LOWER=122;
    const ASCII_CHAR_A_UPPER=65;
    const ASCII_CHAR_Z_UPPER=90;
    const ASCII_DELTA_LOWER_TO_UPPER = 32

    let asciiCode = 0
    let character = ""

    asciiCode = inputLetter.charCodeAt(0);

    switch (inputMode) {

        case "LOWER":
            if (asciiCode >= ASCII_CHAR_A_UPPER && asciiCode<= ASCII_CHAR_Z_UPPER) {
                //si on est entre A-Z on transforme en a-z
                asciiCode+= ASCII_DELTA_LOWER_TO_UPPER
                character = String.fromCharCode(asciiCode);
            } else {
                //sinon on renvoi la lettre (Exemple : !)
                character = inputLetter
            }
          break;
        case "UPPER":
            if (asciiCode >= ASCII_CHAR_A_LOWER && asciiCode<= ASCII_CHAR_Z_LOWER) {
                //si on est entre a-z on transforme en A-Z
                asciiCode-= ASCII_DELTA_LOWER_TO_UPPER
                character = String.fromCharCode(asciiCode);
            } else {
                //sinon on renvoi la lettre (Exemple : !)
                character = inputLetter
            }
          break;

        default:
            character = inputLetter

    }
    return character

};

let formateSentence = (inputArgs) => {

    let inputSentence = inputArgs[0]
    let outputSentence = ""
    let letterFormated = "" 
    let counter=0
    
    

    for (let j = 0; j < inputSentence.length; j++) {

        counter++ //sinon on commence à 0 et 0 est pair alors qu'on est sur la lettre 1 
        //numéro de lettre pair ou impair ?
        calcul = counter % 2
        if (calcul == 0) {
            //pair
            //on met en minuscule 
            letterFormated = formateLetter(inputSentence[j], "LOWER");
            
        } else {
            //impair
            //on met en majuscule
            letterFormated = formateLetter(inputSentence[j], "UPPER");

        }
        outputSentence += letterFormated

    }

    return outputSentence;

}

if ( isValidInput(process.argv.slice(2)) ) {
    let sentenceFormated = formateSentence(process.argv.slice(2))
    console.log(sentenceFormated)
} else {
    console.log("error")
}

