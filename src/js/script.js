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
     imcAlert = 'Abaixo do peso com um valor de IMC menor que 18.5';
    }

    else if (imc >= 18.5 && imc < 25) {
     imcAlert = 'Parabéns, você está no peso normal';
    }

    else if (imc >= 25 && imc < 30) {
     imcAlert = 'Acho bom você cuidar um pouco da alimentação, está levemente acima do peso!';
    }

    else if (imc >= 30 && imc < 35) {
     imcAlert = 'Obesidade grau 1 é onde começa o problema, melhor você se cuidar!!!';
    }

    else if (imc >= 35 && imc < 40) {
     imcAlert = 'Já chegou na obesidade grau 2? Procure um nutricionista rápido!';
    }

    else {
     imcAlert = 'Obesidade grau 3 ou Mórbida, é aqui que a coisa fica mais séria, procure um médico com urgência!';
    }

    return imcAlert;
}