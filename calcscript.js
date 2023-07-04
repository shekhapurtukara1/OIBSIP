function appendToInput(value) {
    document.getElementById("result").value += value;
}

function clearInput() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    const input = document.getElementById("result").value;
    const result = eval(input);
    document.getElementById("result").value = result;
}

