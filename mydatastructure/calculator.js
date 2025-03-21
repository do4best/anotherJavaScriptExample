function calculator(num1, num2, operator) {
    var result = 0;
    try {
        if (operator === '*') {
            result = num1 * num2;
        }
        else if (operator === '/') {
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            result = num1 / num2;
        }
        else if (operator === '+') {
            result = num1 + num2;
        }
        else if (operator === '-') {
            result = num1 - num2;
        }
        else {
            throw new Error("Invalid Operator");
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
    return result;
}
console.log(calculator(523, 562, '*'));
