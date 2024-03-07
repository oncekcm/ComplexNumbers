// Ingenieria de Sotfware
//Operaciones sobre numeros complejos
//
//@author Beimar Choque Mamani
//@version 1.0
//@date 2024-03-05

class principal{
    public static void main(String[] args){
        System.out.println("numeros complejos");
        Complex x=new Complex(2,3);
        Complex y=new Complex(-5,3);
        Complex z=new Complex(0,0);
        z=x.adition(y);
        System.out.println("suma: " + z.toStr());
        
        // Realizar la multiplicación de los números complejos x e y
        Complex z2 = x.multiply(y);
        System.out.println("Multiplicación: " + z2.toStr());
        
        // Realizar la división de los números complejos x e y
        Complex z3 = x.divide(y);
        System.out.println("División: " + z3.toStr());
        
        // Obtener el conjugado del número complejo x
        Complex conjugateX = x.conjugate();
        System.out.println("Conjugado de x: " + conjugateX.toStr());
    }
}

class Complex {
    int real;
    int img;
    Complex(int r, int i){
        this.real=r;
        this.img=i;
    }
    Complex adition(Complex y){
        Complex z=new Complex(0,0);
        z.real=this.real + y.real;
        z.img=this.img + y.img;
        return(z);
    }
    // Método para realizar la multiplicación de dos números complejos
    Complex multiply(Complex y) {
        Complex z = new Complex(0, 0);
        z.real = this.real * y.real - this.img * y.img;
        z.img = this.real * y.img + this.img * y.real;
        return z;
    }
    
    // Método para realizar la división de dos números complejos
    Complex divide(Complex y) {
        Complex z = new Complex(0, 0);
        int denom = y.real * y.real + y.img * y.img;
        z.real = (this.real * y.real + this.img * y.img) / denom;
        z.img = (this.img * y.real - this.real * y.img) / denom;
        return z;
    }
    
    // Método para calcular el conjugado de un número complejo
    Complex conjugate() {
        return new Complex(this.real, -this.img);
    }
    String toStr(){
        return (String.valueOf(this.real)+ "+" + String.valueOf(this.img)+"i");
    }
}
