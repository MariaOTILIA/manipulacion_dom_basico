const h1 = document.querySelector('h1');
const forma = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');


// addEventListener escucha cada vez que suceda un evento 

//btn.addEventListener('click', btnOnclick);

// cuando hacemos un addeventListener de nuestro formulario, ya no escuchamos el event de click sino submit
//y le devemos enviar a la funcion como parametro un event

//forma.addEventListener('submit', sumarInputValues);

/*function sumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    resultado.innerHTML = "Resultado: " + sumaInputs;
}*/

//Otra forma de manejar el codigo, pero pasar usar el clicl, debemos 
//decirle en eñl boton del html, que el tipo es button
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    //console.log({ event });
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    resultado.innerHTML = "Resultado: " + sumaInputs;
}