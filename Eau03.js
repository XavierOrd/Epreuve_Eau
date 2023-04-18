let displayReverseArgs = (inputArgs) => {

    let numberArgs = inputArgs.length-1;

    if (numberArgs<0) {
        console.log("Error");
    } else {
        for (let i = numberArgs; i >= 0; i--) {
            console.log(inputArgs[i]);
        }   
    }
     
};

displayReverseArgs(process.argv.slice(2))