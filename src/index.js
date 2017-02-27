module.exports = function multiply(first, second) {
    let result = [];

    first = first.split('').reverse();
    second = second.split('').reverse();

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            let multiply = first[i] * second[j];
            result[i + j] = (result[i + j] != undefined) ? result[i + j] + multiply : multiply;
        }
    }

    for (let i = 0; i < result.length; i++) {
        let number = result[i] % 10;
        let carry = Math.floor(result[i] / 10);
        result[i] = number;

        if (result[i + 1] != undefined)
            result[i + 1] += carry;
        else if (carry != 0)
            result[i + 1] = carry;
    }

    return result.reverse().join('').replace(/^(0(?!$))+/, "");
}
