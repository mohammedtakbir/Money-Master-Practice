function getInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);
    // inputField.value = '';
    // if(isNaN(input)){
    //     alert('enter valid number')
    //     return;
    // }
    return input;
}

function getElementById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const previousValue = parseFloat(elementFieldString);
    return previousValue;
}

function setElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}