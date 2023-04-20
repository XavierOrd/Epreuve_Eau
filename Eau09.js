let isValidInput = (inputArgs) => {
    
    let inputParam = inputArgs[0]

    if ( inputParam == undefined ) {
        return false;
    }
    return true;
};

let isNumberOnly = (inputArgs) => {

    const regexpDigit = /\d/;
    let myString = inputArgs[0];
    let isFullNumber=true;
    
    for (let j = 0; j < myString.length; j++) {

        //possible avec isNan mais espace = 0
        if (!myString[j].match(regexpDigit)) {
            isFullNumber=false;
        }

    };

    return isFullNumber

};

if (isValidInput(process.argv.slice(2))) {
    if ( isNumberOnly(process.argv.slice(2)) ) {
        console.log('True');
    } else {
        console.log('False');
    }
} else {
    console.log("error")
}
