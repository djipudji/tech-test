/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result[numbers[i]] = true;
    }
    for (let i = 0; i < result.length; i++) {
        if (!result[i]) return i;
    }
}

console.log(result(numbers));
