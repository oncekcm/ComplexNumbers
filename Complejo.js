// Ingenieria de Sotfware
// Operaciones sobre numeros complejos
//
// @author Beimar Choque Mamani
// @version 1.0
// @date 2024-03-05

class Principal {
    constructor() {
        console.log("Operaciones con números complejos:");
        
        // Crear dos números complejos
        let x = new Complex(2, 3);
        let y = new Complex(-5, 3);
        
        // Realizar la suma de los números complejos x e y
        let z1 = x.addition(y);
        console.log("Suma: " + z1.toString());
        
        // Realizar la resta de los números complejos x e y
        let z2 = x.subtraction(y);
        console.log("Resta: " + z2.toString());
        
        // Realizar la multiplicación de los números complejos x e y
        let z3 = x.multiply(y);
        console.log("Multiplicación: " + z3.toString());
        
        // Realizar la división de los números complejos x e y
        let z4 = x.divide(y);
        console.log("División: " + z4.toString());
        
        // Obtener el conjugado del número complejo x
        let conjugateX = x.conjugate();
        console.log("Conjugado de x: " + conjugateX.toString());
    }
}

class Complex {
    constructor(r, i) {
        this.real = r;
        this.imaginary = i;
    }

    // Método para realizar la adición de dos números complejos
    addition(y) {
        return new Complex(this.real + y.real, this.imaginary + y.imaginary);
    }

    // Método para realizar la resta de dos números complejos
    subtraction(y) {
        return new Complex(this.real - y.real, this.imaginary - y.imaginary);
    }

    // Método para realizar la multiplicación de dos números complejos
    multiply(y) {
        return new Complex(this.real * y.real - this.imaginary * y.imaginary, this.real * y.imaginary + this.imaginary * y.real);
    }

    // Método para realizar la división de dos números complejos
    divide(y) {
        let denom = y.real * y.real + y.imaginary * y.imaginary;
        return new Complex((this.real * y.real + this.imaginary * y.imaginary) / denom, (this.imaginary * y.real - this.real * y.imaginary) / denom);
    }

    // Método para obtener el conjugado de un número complejo
    conjugate() {
        return new Complex(this.real, -this.imaginary);
    }

    // Método para convertir el número complejo en una cadena de texto
    toString() {
        return this.real + (this.imaginary >= 0 ? "+" : "") + this.imaginary + "i";
    }
}

// Instanciar la clase Principal para probar las operaciones
new Principal();
