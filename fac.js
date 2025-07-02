function factorialRecursive(n) {
    if (n == 0 || n == 1) return 1;
    return n * factorialRecursive(n - 1);
}
function showFactorial() {
    var n = parseInt(document.getElementById('numberInput').value);
    var result = factorialRecursive(n);
    document.getElementById('result').textContent = 
        'Factorial of ' + n + ' is ' + result;
}
window.onload = showFactorial;