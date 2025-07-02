function armstrong(n) {
    let originalNumber = n;
    let sum = 0;
    let numDigits = n.toString().length;
    while (n > 0) {
        let digit = n % 10;
        sum += digit ** numDigits;
        n = Math.floor(n / 10);
    }
    return sum == originalNumber;
}
function checkArmstrong() {
    let input = document.getElementById('numberInput').value;
    let n = parseInt(input);
    let resultText = '';
    if (armstrong(n)) {
        resultText = n + " is an Armstrong number";
    } else {
        resultText = n + " is not an Armstrong number";
    }
    document.getElementById('result').textContent = resultText;
}
window.onload = checkArmstrong;