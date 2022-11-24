"use strict";
class FigurasGeometricas {
    constructor() {
        this._nombre_figura = "cuadrado";
        this._color = "red";
        this._tamaño_figura = "grande";
    }
    get nombre_figura() {
        return this._nombre_figura;
    }
    get color() {
        return this._color;
    }
    get tamaño_figura() {
        return this._tamaño_figura;
    }
    set nombre_figura(thesem) {
        this._nombre_figura = thesem;
    }
    set color(thesem) {
        this._color = thesem;
    }
    set tamaño_figura(thecourse) {
        this._tamaño_figura = thecourse;
    }
}
class Rectangulo extends FigurasGeometricas {
    constructor() {
        super(...arguments);
        this._longitud = 90;
        this._ancho = 89;
    }
    get longitud() {
        return this._longitud;
    }
    get ancho() {
        return this._ancho;
    }
    set longitud(a) {
        this._longitud = a;
    }
    set ancho(a) {
        this._ancho = a;
    }
}
class Triangulo extends FigurasGeometricas {
    constructor() {
        super(...arguments);
        this._base = 54;
        this._altura = 55;
    }
    get base() {
        return this._base;
    }
    get altura() {
        return this._altura;
    }
    set base(a) {
        this._base = a;
    }
    set altura(a) {
        this._altura = a;
    }
}
class Circulo extends FigurasGeometricas {
    constructor() {
        super(...arguments);
        this._radio = 45;
        this._pi = 1;
    }
    get radio() { return this._radio; }
    get pi() { return this._pi; }
    set radio(a) { this._radio = a; }
    set pi(a) { this._pi = a; }
}
let rectangulo = new Rectangulo();
let triangulo = new Triangulo();
let circulo = new Circulo();
rectangulo.nombre_figura = "rectángulo";
rectangulo.tamaño_figura = "pequeno";
rectangulo.color = "red";
rectangulo.longitud = 11;
rectangulo.ancho = 22;
triangulo.nombre_figura = "triángulo rectangulo";
triangulo.tamaño_figura = "grande";
triangulo.color = "black";
triangulo.base = 3;
triangulo.altura = 77;
circulo.nombre_figura = "círculo";
circulo.tamaño_figura = "mediano";
circulo.color = "blue";
circulo.radio = 1;
circulo.pi = 3.141516;
console.log("Esta figura geométrica se llama:", rectangulo.nombre_figura);
console.log("Su tamaño es:", rectangulo.tamaño_figura);
console.log("De color:", rectangulo.color);
console.log("Su longitud es de:", rectangulo.longitud + " metros");
console.log("El ancho es de:", rectangulo.ancho + " metros");
console.log("Esta figura geometrica se llama:", triangulo.nombre_figura);
console.log("Su tamaño es:", triangulo.tamaño_figura);
console.log("De color:", triangulo.color);
console.log("Su base tiene", triangulo.base + " cm");
console.log("Su altura es de:", triangulo.altura + " cm");
console.log("Esta figura geometrica se llama:", circulo.nombre_figura);
console.log("Su tamaño es:", circulo.tamaño_figura);
console.log("De color:", circulo.color);
console.log("Su radio es de", circulo.radio + " cm");
console.log("El valor de pi es de:", circulo.pi + " cm");
