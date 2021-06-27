/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function prefix(str1, str2) {
    result = "";
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) result += str1[i];
    }
    return result;
}

function result(words) {
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result = prefix(result, words[i]);
    }
    return result;
}

console.log(result(words));
