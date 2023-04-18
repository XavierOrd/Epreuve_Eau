let calcFibo = (inputArray, indiceFinal) => {
    let result = 0;
    let indiceMax = inputArray.length - 1;

    if (indiceMax === indiceFinal) { //on arrête 
        return 1;
    }

    result = (inputArray[inputArray.length - 1] + inputArray[inputArray.length - 2]);
    inputArray.push(result);

    calcFibo(inputArray, indiceFinal); //appel récursif 

};

let displayFiboValue = (inputParam) => {

    let param = process.argv.slice(2)
    let numberParam = parseInt(param[0]);

    let fibo = [0, 1];

    if (isNaN(numberParam)) {
        console.log(-1);
    } else {
        if (numberParam > 1) {
            calcFibo(fibo, numberParam)
        }
        console.log(fibo[numberParam])
    }

};

displayFiboValue(process.argv.slice(2))