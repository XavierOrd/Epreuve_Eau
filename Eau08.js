/*
\s (“s” vient de “space” (“espace”))
Un symbole d’espace: inclut les espaces, les tabulations \t, les sauts de ligne \n 
*/

// let myString = "Hello\tworld!\nThis is a test string.";
// myString = "b9onjour mathilde, comment vas-tu ?!";



let isValidInput = (inputArgs) => {

    let inputParam = inputArgs[0]

    if ((inputParam == undefined) || (!isNaN(inputParam))) {
        return false;
    }
    return true;
};

let formateSentence = (inputArgs) => {

    const regexpSpace = /\s/;

    let myString = inputArgs[0]
    let spaceDetectedBefore = true;
    let sentence = "";

    for (let j = 0; j < myString.length; j++) {

        let character = ""
        //Question à poser
        //je voulais simplement faire myString[j] === "\n" ou myString[j] === "\s" mais la lettre s === "\s" donc ça détecte bien les espaces, mais aussi la lettre s..
        if (myString[j].match(regexpSpace)) {
            character = myString[j];
            spaceDetectedBefore = true;
        } else {

            if (spaceDetectedBefore) {
                character = myString[j].toUpperCase();
                spaceDetectedBefore = false;
            } else {
                character = myString[j];
            }

        }

        sentence += character;

    };
    return sentence
};


if (isValidInput(process.argv.slice(2))) {
    let sentenceFormated = formateSentence(process.argv.slice(2))
    console.log(sentenceFormated)
} else {
    console.log("error")
}
