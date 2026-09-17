let firstInput = document.getElementById('first-input');
let secondInput = document.getElementById('second-input');

let output = document.getElementById('output');

function addition(){
    // we weren't taught how to typecast in class, so I decided to typecast using Number from W3Schools, and used the function isNaN to catch non valid inputs.

    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        output.innerHTML = "Invalid input(s)";
    }else{
        output.innerHTML = Number(firstInput.value) + Number(secondInput.value);
    }
}

function subtraction(){

    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        output.innerHTML = "Invalid input(s)";
    }else{
        output.innerHTML = Number(firstInput.value) - Number(secondInput.value);
    }
}

function multiplication(){

    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        output.innerHTML = "Invalid input(s)";
    }else{
        output.innerHTML = Number(firstInput.value) * Number(secondInput.value);
    }
}

function division(){

    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        output.innerHTML = "Invalid input(s)";
    }else if (Number(secondInput.value === 0)){
        output.innerHTML = "Divide by 0";
    }else{
        output.innerHTML = Number(firstInput.value) / Number(secondInput.value);

    }

}

function power(){
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        output.innerHTML = "Invalid input(s)";
    }else if (Number(secondInput.value >= 0)){
        let n = 1;
        for (let i = 0; i < Number(secondInput.value); i++){
            n *= Number(firstInput.value);
        }
        output.innerHTML = n;
    }else{
        let n = 1;
        for (let i = 0; i > Number(secondInput.value); i--){
            n /= Number(firstInput.value);
        }
        output.innerHTML = n;
    }
}

function clearInput(){
    firstInput.value = '';
    secondInput.value= '';
    output.innerHTML = '';
}
