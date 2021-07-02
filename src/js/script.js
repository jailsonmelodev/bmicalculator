const fomrIMC = document.querySelector('[data-form="inputCalc"]');

const calcIMC = (kilos, altura) => {
    altura = altura / 100;
    return (kilos / (altura * altura));
}
  
fomrIMC.addEventListener('submit', event => {
    event.preventDefault();

    const {
        inputWeight,
        inputHeight
    } = event.target;

    const [ weight, height ] = [ inputWeight.value, inputHeight.value ]

    const imc = calcIMC(weight, height);
    const result = resultIMC(imc);

    document.querySelector('.display-imc').innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
    document.querySelector('.display-result').innerHTML = result;
});

const resultIMC = (imc) => {
    let imcAlert = '';
    if (imc < 18.5) {
     imcAlert = 'Abaixo do peso';
    }

    else if (imc >= 18.5 && imc < 25) {
     imcAlert = 'Peso normal';
    }

    else if (imc >= 25 && imc < 30) {
     imcAlert = 'Sobrepeso';
    }

    else if (imc >= 30 && imc < 35) {
     imcAlert = 'Obesidade grau 1';
    }

    else if (imc >= 35 && imc < 40) {
     imcAlert = ' Obesidade grau 2';
    }

    else {
     imcAlert = 'Obesidade grau 3 ou Mórbida';
    }

    return imcAlert;
}