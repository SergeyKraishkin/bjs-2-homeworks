"use strict"

function getArrayParams(...arr) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    let avg = Number((arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0) / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    return arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);

}

function differenceMaxMinWorker(...arr) {
    if (arr.length != 0) {
        return Math.max.apply(null, arr) - Math.min.apply(null, arr);
    }
    return 0;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = EvenElement(...arr);
    let sumOddElement = OddElement(...arr);

    function EvenElement(...array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if ((arr[i] % 2) == 0) {
                sum = sum + array[i];
            }
        }
        return sum;
    };

    function OddElement(...array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if ((arr[i] % 2) == 1) {
                sum = sum + array[i];
            }
        }
        return sum;
    };

    return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {

    if (arr.length != 0) {
        let sumEvenElement = EvenElement(...arr)[0];
        let countEvenElement = EvenElement(...arr)[1]

        function EvenElement(...array) {
            let sum = [0, 0];
            for (let i = 0; i < array.length; i++) {
                if ((arr[i] % 2) == 0) {
                    sum[0] = sum[0] + array[i];
                    sum[1]++;
                }
            }
            return sum;
        };
        return sumEvenElement / countEvenElement;
    }
    return 0;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = func(...arrOfArr[0]);
    let newresult = 0;
    for (let i = 1; i < arrOfArr.length; i++) {
        newresult = func(...arrOfArr[i]);
        if (maxWorkerResult < newresult) {
            maxWorkerResult = newresult;
        }
    }
    return maxWorkerResult;
}