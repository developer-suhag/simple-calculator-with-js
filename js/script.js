const outputField = document.getElementById('output-field');

document.getElementById('one').addEventListener('click', function () {
    outputField.value += '1';
});
document.getElementById('two').addEventListener('click', function () {
    outputField.value += '2';
});
document.getElementById('three').addEventListener('click', function () {
    outputField.value += '3';
});
document.getElementById('four').addEventListener('click', function () {
    outputField.value += '4';
});
document.getElementById('five').addEventListener('click', function () {
    outputField.value += '5';
});
document.getElementById('six').addEventListener('click', function () {
    outputField.value += '6';
});
document.getElementById('seven').addEventListener('click', function () {
    outputField.value += '7';
});
document.getElementById('eight').addEventListener('click', function () {
    outputField.value += '8';
});
document.getElementById('nine').addEventListener('click', function () {
    outputField.value += '9';
});
document.getElementById('zero').addEventListener('click', function () {
    outputField.value += '0';
});
document.getElementById('addition').addEventListener('click', function () {
    debugger;
    outputField.value += ' + ';
});
document.getElementById('subtrac').addEventListener('click', function () {
    outputField.value += ' -';
});
document.getElementById('multipy').addEventListener('click', function () {
    outputField.value += ' * ';
});

document.getElementById('division').addEventListener('click', function () {
    outputField.value += ' / ';
});
document.getElementById('clear').addEventListener('click', function () {
    outputField.value = "";
});
document.getElementById('equal').addEventListener('click', function () {
    const calculattion = eval(outputField.value)
    outputField.value = calculattion;
});