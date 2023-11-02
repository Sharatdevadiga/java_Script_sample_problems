function isPalindrome(inputStr) {
    const n = inputStr.length;
    for (let i = 0; i < n / 2; i++) {
        if (inputStr[i] !== inputStr[n - 1 - i]) {
            return false; // Not a palindrome, exit early
        }
    }
    return true; // It is a palindrome
}

function main() {
    const inputStr1 = 'abcxcba';
    const inputStr2 = 'hello';

    console.log(`'${inputStr1}' is a palindrome: ${isPalindrome(inputStr1)}`);
    console.log(`'${inputStr2}' is a palindrome: ${isPalindrome(inputStr2)}`);
}

main();