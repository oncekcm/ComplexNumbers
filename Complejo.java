// Ingenieria de Sotfware
//Operaciones sobre numeros complejos
//
//@author Beimar Choque Mamani
//@version 1.0
//@date 2024-03-05
import java.lang.Math;
class principal{
    public static void main(String[] args){
        System.out.println("Operaciones con números complejos");
        Complex x=new Complex(2,3);
        Complex y=new Complex(-5,3);
        Complex z=new Complex(0,0);
        z=x.addition(y);
        System.out.println("Suma: " + z.toStr());
        
        // Realizar la multiplicación de los números complejos 
        Complex z2 = x.multiply(y);
        System.out.println("Multiplicación: " + z2.toStr());
        
        // Realizar la división de los números complejos 
        Complex z3 = x.divide(y);
        System.out.println("División: " + z3.toStr());
        
        // Obtener el conjugado del número complejo x
        Complex conjugateX = x.conjugate();
        System.out.println("Conjugado de x: " + conjugateX.toStr());
        
        // Calcular la raíz cuadrada del número complejo x
        Complex sqrtX = x.sqrt();
        System.out.println("Raíz cuadrada de x: " + sqrtX.toStr());
        
        // Calcular el logaritmo del número complejo x
        Complex logX = x.log();
        System.out.println("Logaritmo de x: " + logX.toStr());
    }
}

class Complex {
    int real;
    int imag;
    Complex(int r, int i){
        this.real=r;
        this.imag=i;
    }
    
    Complex addition(Complex y){
        Complex z=new Complex(0,0);
        z.real=this.real + y.real;
        z.imag=this.imag + y.imag;
        return(z);
    }
    
    // Método para realizar la multiplicación de dos números complejos
    Complex multiply(Complex y) {
        Complex z = new Complex(0, 0);
        z.real = this.real * y.real - this.imag * y.imag;
        z.imag = this.real * y.imag + this.imag * y.real;
        return z;
    }
    
    // Método para realizar la división de dos números complejos
    Complex divide(Complex y) {
        Complex z = new Complex(0, 0);
        int denom = y.real * y.real + y.imag * y.imag;
        z.real = (this.real * y.real + this.imag * y.imag) / denom;
        z.imag = (this.imag * y.real - this.real * y.imag) / denom;
        return z;
    }
    
    // Método para calcular el conjugado de un número complejo
    Complex conjugate() {
        return new Complex(this.real, -this.imag);
    }
    
    // Método para calcular la raíz cuadrada de un número complejo
    Complex sqrt() {
        double r = Math.sqrt(this.magnitude());
        double theta = this.argument() / 2;
        return new Complex((int)(r * Math.cos(theta)), (int)(r * Math.sin(theta)));
    }
    
    // Método para calcular el logaritmo de un número complejo
    Complex log() {
        double r = Math.log(this.magnitude());
        double theta = this.argument();
        return new Complex((int)r, (int)theta);
    }
    
    // Método para calcular la magnitud de un número complejo
    double magnitude() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }
    
    // Método para calcular el argumento de un número complejo
    double argument() {
        return Math.atan2(this.imag, this.real);
    }
    
    String toStr(){
        return (String.valueOf(this.real)+ "+" + String.valueOf(this.imag)+"i");
    }
}
