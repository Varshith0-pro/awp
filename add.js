function addNumbers() {

    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var sum = num1 + num2;
    document.getElementById("result").textContent = "Sum: " + sum;
}