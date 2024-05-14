let buttonDonate1 =  document.getElementById('optionDonate1')
let buttonDonate2 =  document.getElementById('optionDonate2')

var cpfFormatado = false;

function addnewCPF() {
    var CPF = document.getElementById("labelcpf").value;
    var newCPF = "";
    
     if(CPF.length !== 11 && cpfFormatado === true) {
            cpfFormatado = false;
            CPF = ""
        }; 
        if (!cpfFormatado && CPF.length > 10) {
        newCPF = CPF.slice(0, 3) + "." + CPF.slice(3, 6) + "." + CPF.slice(6, 9) + "-" + CPF.slice(9);
        cpfFormatado = true; 
        } else {
            newCPF = CPF; 
                }
    
    document.getElementById("labelcpf").value = newCPF;
}
$(document).ready(function(){
    $('#labeldate').mask('00/00/0000');
});

let button1Selected = false;
buttonDonate1.addEventListener("click", function(event) {
    button1Selected = true
    button2Selected = false
    console.log("valor 1 " + button1Selected)
    console.log("valor 2 " + button2Selected)
    parameter(button1Selected,undefined)
    
});

let button2Selected = false;
buttonDonate2.addEventListener("click", function(event) {
    button1Selected = false
    button2Selected = true
    console.log("valor 1 " + button1Selected)
    console.log("valor 2 " + button2Selected)
    parameter(undefined,button2Selected)
});

function parameter(button1Selected, button2Selected){
    button1ConfirmSelected(button1Selected, button2Selected)
}




function button1ConfirmSelected(button1Selected, button2Selected) {
    if (button1Selected == true) {
        buttonDonate1.setAttribute('class', 'selected');
        buttonDonate2.removeAttribute('class', 'selected');
    } else if (button2Selected == true) {
        buttonDonate2.setAttribute('class', 'selected');
        buttonDonate1.removeAttribute('class', 'selected');
    }
}


     


