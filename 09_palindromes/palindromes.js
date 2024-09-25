const palindromes = function (string) {
    let chars = string.split("");
    let reversed = [];
    let filtered = [];

    // Iterate from end and build reversed array with only alphabetic characters
    for (let i = chars.length - 1; i >= 0; i--) {
        if (/^[a-zA-Z0-9]$/.test(chars[i])) {
            reversed.push(chars[i].toLowerCase());  // Push the lowercase letter for comparison
        }
    }

    // Build the filtered array with only alphabetic characters from the original string
    for (let i = 0; i < chars.length; i++) {
        if (/^[a-zA-Z0-9]$/.test(chars[i])) {
            filtered.push(chars[i].toLowerCase());
        }
    }

    // Compare the filtered array to the reversed array
    return filtered.join("") === reversed.join("");
};

// Do not edit below this line
module.exports = palindromes;
