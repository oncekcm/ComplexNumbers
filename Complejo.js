// Ingenieria de Sotfware
// Operaciones sobre numeros complejos
//
// @author Beimar Choque Mamani
// @version 1.0
// @date 2024-03-05

class Principal {
    constructor() {
        console.log("Operaciones con números complejos:");
        let x = new Complex(2, 3);
        let y = new Complex(-5, 3);
        let z = new Complex(0, 0);
        z = x.addition(y);
        console.log("Suma: " + z.toString());

        // Realizar la multiplicación de los números complejos x e y
        let z2 = x.multiply(y);
        console.log("Multiplicación: " + z2.toString());

        // Realizar la división de los números complejos x e y
        let z3 = x.divide(y);
        console.log("División: " + z3.toString());

        // Obtener el conjugado del número complejo x
        let conjugateX = x.conjugate();
        console.log("Conjugado de x: " + conjugateX.toString());

        // Calcular la raíz cuadrada del número complejo x
        let sqrtX = x.sqrt();
        console.log("Raíz cuadrada de x: " + sqrtX.toString());

        // Calcular el logaritmo del número complejo x
        let logX = x.log();
        console.log("Logaritmo de x: " + logX.toString());
    }
}

class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    // Método para realizar la adición de dos números complejos
    addition(y) {
        return new Complex(this.real + y.real, this.imag + y.imag);
    }

    // Método para realizar la multiplicación de dos números complejos
    multiply(y) {
        return new Complex(this.real * y.real - this.imag * y.imag, this.real * y.imag + this.imag * y.real);
    }

    // Método para realizar la división de dos números complejos
    divide(y) {
        let denom = y.real * y.real + y.imag * y.imag;
        return new Complex((this.real * y.real + this.imag * y.imag) / denom, (this.imag * y.real - this.real * y.imag) / denom);
    }

    // Método para calcular el conjugado de un número complejo
    conjugate() {
        return new Complex(this.real, -this.imag);
    }

    // Método para calcular la raíz cuadrada de un número complejo
    sqrt() {
        let r = Math.sqrt(this.magnitude());
        let theta = this.argument() / 2;
        return new Complex(r * Math.cos(theta), r * Math.sin(theta));
    }

    // Método para calcular el logaritmo de un número complejo
    log() {
        let r = Math.log(this.magnitude());
        let theta = this.argument();
        return new Complex(r, theta);
    }

    // Método para calcular la magnitud de un número complejo
    magnitude() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }

    // Método para calcular el argumento de un número complejo
    argument() {
        return Math.atan2(this.imag, this.real);
    }

    // Método para convertir el número complejo en una cadena de texto
    toString() {
        return this.real + (this.imag >= 0 ? "+" : "") + this.imag + "i";
    }
}

// Instanciar la clase Principal para probar las operaciones
new Principal();
