// Codigo del cuadrado
console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Lados del cuadrado miden: " + ladoCuadrado)

//const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}

console.log("Perimetro del cuadrado miden: " + perimetroCuadrado(15) + "cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}

console.log("Area del cuadrado miden: " + areaCuadrado(15) + "cm2")

console.groupEnd()

// Codigo del triangulo
console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 4.5;

console.log(`Los lados del triangulo son: ${ladoTriangulo1} cm
  y la base es: ${baseTriangulo} cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log(`El perimetro del triangulo es: ${perimetroTriangulo}
  y el area del triangulo es: ${areaTriangulo}`)

console.groupEnd()

// Codigo del circulo
console.group("Circulo")
const radio = 10;
const pi = Math.PI; //3.1416;

const perimetroCirculo = radio * 2 * pi;
const areaCirculo = radio * radio * pi;

console.log(`El perimetro del circulo es: ${perimetroCirculo}
  y el area del circulo es: ${areaCirculo}`)

console.groupEnd()
