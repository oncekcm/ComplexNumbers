//ingenieria de software
//Operaciones con numeros complejos
//@autor Arriaga Ortiz Erika
//@date 2024-03.06

class Complex {
    // Atributos
    constructor(real, img) {
        this.real = real;
        this.img = img;
    }

    // Métodos

    // Suma
    addition(other) {
        return new Complex(this.real + other.real, this.img + other.img);
    }

    // Resta
    subtraction(other) {
        return new Complex(this.real - other.real, this.img - other.img);
    }

    // Multiplicación
    multiplication(other) {
        const realPart = this.real * other.real - this.img * other.img;
        const imgPart = this.real * other.img + this.img * other.real;
        return new Complex(realPart, imgPart);
    }

    // División
    division(other) {
        const denominator = other.real ** 2 + other.img ** 2;
        const realPart = (this.real * other.real + this.img * other.img) / denominator;
        const imgPart = (this.img * other.real - this.real * other.img) / denominator;
        return new Complex(realPart, imgPart);
    }

    // Conjugado
    conjugate() {
        return new Complex(this.real, -this.img);
    }

    // Módulo
    module() {
        return Math.sqrt(this.real ** 2 + this.img ** 2);
    }

    // Fase (argumento)
    phase() {
        return Math.atan2(this.img, this.real);
    }

    // Potencia
    power(exponent) {
        const mod = this.module();
        const phase = this.phase();
        const resultMod = mod ** exponent;
        const resultPhase = phase * exponent;
        return Complex.fromPolar(resultMod, resultPhase);
    }

    // Raíz cuadrada
    squareRoot() {
        const mod = this.module();
        const phase = this.phase();
        const resultMod = Math.sqrt(mod);
        const resultPhase = phase / 2;
        return Complex.fromPolar(resultMod, resultPhase);
    }

    // Logaritmo
    logarithm() {
        const mod = this.module();
        const phase = this.phase();
        return new Complex(Math.log(mod), phase);
    }

    // Método estático para crear un número complejo a partir de coordenadas polares
    static fromPolar(mod, phase) {
        const realPart = mod * Math.cos(phase);
        const imgPart = mod * Math.sin(phase);
        return new Complex(realPart, imgPart);
    }

    // Método para convertir una cadena en un número complejo
    static toComplex(str) {
        // Asumiendo que la cadena tiene el formato "a+bi"
        const parts = str.split("+");
        const real = parseFloat(parts[0]);
        const img = parseFloat(parts[1]);
        return new Complex(real, img);
    }

    // Método para convertir el número complejo en una cadena
    toString() {
        return `${this.real}${this.img >= 0 ? "+" : "-"}${Math.abs(this.img)}i`;
    }
}

const z1 = new Complex(2, 3);
const z2 = new Complex(1, -2);

console.log("z1:", z1.toString());
console.log("z2:", z2.toString());

console.log("Suma:", z1.addition(z2).toString());
console.log("Resta:", z1.subtraction(z2).toString());
console.log("Multiplicación:", z1.multiplication(z2).toString());
console.log("División:", z1.division(z2).toString());
console.log("Conjugado z1:", z1.conjugate().toString());
console.log("Módulo z1:", z1.module());
console.log("Fase z1:", z1.phase());
console.log("Potencia z1^2:", z1.power(2).toString());
console.log("Raíz cuadrada de z1:", z1.squareRoot().toString());
console.log("Logaritmo de z1:", z1.logarithm().toString());
