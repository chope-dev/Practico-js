/* Código del cuadrado */
console.group("Cuadrados")
/* const ladoCuadrado = 5;
console.log("lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function areaCuadrado (lado) {
    return lado * lado
}

/* console.log("El area del cuadrado es: " + areaCuadrado + "cm2"); */
console.groupEnd();
/* Código del triangulo*/
console.group("Triángulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo1+ "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, "); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm"); */

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}

/* console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm"); */

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.log("El area del triangulo es de: " + areaTriangulo + "cm2");


console.groupEnd();

/* Código del círculo*/
console.group("Círculos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm"); */

//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circuferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function AreaCirculo (radio) {
    return (radio * radio) * PI
}
console.groupEnd();



//Aca interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}