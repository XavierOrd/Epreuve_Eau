/* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.
 */
let isDividableByItselfAndOne = (inputNumber) => {
    //le chiffre est divisible par 1 et lui-même
    let result;
    result = inputNumber / 1;
    if (Number.isInteger(result)) {
        result = inputNumber / inputNumber;
        if (Number.isInteger(result)) {
            return true;
        }
    }
    return false;
};

let isPrimeNumber = (inputNumber) => {
    let result;
    let i;

    if (!isDividableByItselfAndOne(inputNumber)) {
        return false;
    }

    i = inputNumber - 1
    while (i > 1) {
        result = inputNumber / i;
        if (Number.isInteger(result)) {
            //on peut le diviser par un autre nombre que lui même et 1 donc ce n'est PAS un nombre entier
            //inutile de contrôler le reste
            return false;
        }
        i--;
    }
    return true;
};

let displayTheFirstPrimeNumber = (inputParam) => {

    let paramNumber = parseInt(inputParam[0]);
    let findPrimeNumber = false;

    if (isNaN(paramNumber)) {
        console.log(-1);
    } else {
        
        while (!findPrimeNumber) {
            paramNumber++
            if (isPrimeNumber(paramNumber)) {
                console.log(paramNumber)
                findPrimeNumber = true
            }
        }

    }

};

displayTheFirstPrimeNumber(process.argv.slice(2));