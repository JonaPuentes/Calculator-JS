const screen = document.querySelector("#screen");
const btns = document.querySelectorAll(".buttons input");
const igualBtn = document.querySelector("#igual");
const borrarBtn = document.querySelector("#borrar");

btns.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.value;
        screen.value += botonApretado;
    });
});

igualBtn.addEventListener("click", () => {
    try {
        const expresion = screen.value;
        const resultado = evaluarExpresion(expresion);
        screen.value = resultado;
    } catch (error) {
        screen.value = "Error";
    }
});

borrarBtn.addEventListener("click", () => {
    screen.value = "";
});

function evaluarExpresion(expresion) {
    const operadores = expresion.match(/[+\-*/]/g);
    const numeros = expresion.split(/[+\-*/]/).map(num => parseFloat(num));
    
    let resultado = numeros[0];
    
    for (let i = 0; i < operadores.length; i++) {
        const operador = operadores[i];
        const numero = numeros[i + 1];
        
        switch (operador) {
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '*':
                resultado *= numero;
                break;
            case '/':
                resultado /= numero;
                break;
            default:
                break;
        }
    }
    
    return resultado;
}





