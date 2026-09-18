let firstInput = document.getElementById('first-input');
let secondInput = document.getElementById('second-input');

let output = document.getElementById('output');

function jarvis_says(x){
    output.innerHTML = "Jarvis says: " + x;
}


function addition(){
    // we weren't taught how to typecast in class, so I decided to typecast using Number from W3Schools, and used the function isNaN to catch non valid inputs.
    output.style.color = "black";
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
    }else{
        let x = Number(firstInput.value) + Number(secondInput.value);
        jarvis_says(x);
        if (x < 0) output.style.color = "red";
    }
}

function subtraction(){
    output.style.color = "black";
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
    }else{
        let x = Number(firstInput.value) - Number(secondInput.value);
        jarvis_says(x);
        if (x < 0) output.style.color = "red";
    }
}

function multiplication(){
    output.style.color = "black";
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
    }else{
        let x = Number(firstInput.value) * Number(secondInput.value);
        jarvis_says(x);
        if (x < 0) output.style.color = "red";
    }
}

function division(){
    output.style.color = "black";
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
    }else if (Number(secondInput.value === 0)){
        jarvis_says("Divide by 0");
    }else{
        let x = Number(firstInput.value) / Number(secondInput.value);
        jarvis_says(x);
        if (x < 0) output.style.color = "red";

    }

}

function power(){
    output.style.color = "black"; //reset color of font
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
    }else if (Number(secondInput.value >= 0)){
        let n = 1;
        for (let i = 0; i < Number(secondInput.value); i++){
            n *= Number(firstInput.value);
        }
        jarvis_says(n);
        if (n < 0) output.style.color = "red";
    }else{
        let n = 1;
        for (let i = 0; i > Number(secondInput.value); i--){
            n /= Number(firstInput.value);
        }
        jarvis_says(n);
        if (n < 0) output.style.color = "red";
    }
}

function clearInput(){
    firstInput.value = '';
    secondInput.value= '';
    jarvis_says('');
}
