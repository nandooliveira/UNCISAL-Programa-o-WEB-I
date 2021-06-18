let botao = document.getElementById("calcular");

botao.addEventListener("click", function(e) {
    e.preventDefault();

    let campoAltura = document.getElementById("altura");
    let campoPeso = document.getElementById("peso");
    let peso = campoPeso.value;
    let altura = campoAltura.value / 100;

    let imc = peso / (altura * altura);
    console.log(imc)

    let resultado = "";
    if (imc >= 16 && imc < 17) {
        resultado = "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 19) {
        resultado = "Abaixo do peso";
    } else if (imc >= 19 && imc < 25) {
        resultado = "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
        resultado = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade grau II";
    } else if (imc > 40) {
        resultado = "Obesidade grau III";
    }

    let divResultado = document.getElementById("resultado");
    divResultado.textContent = resultado;
});

// var interruptor = document.getElementById('interruptor');
// interruptor.addEventListener("click", function(e) {
//     var lampada = document.getElementById('lampada');
//     var estadoDoInterruptor = interruptor.textContent;

//     if(estadoDoInterruptor == "Acender") {
//         lampada.src = "images/acesa.png";
//         interruptor.textContent = "Apagar";
//     } else {
//         lampada.src = "images/apagada.png";
//         interruptor.textContent = "Acender";
//     }
// });
