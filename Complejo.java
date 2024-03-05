// Lab 2 Ingenieria de Sotfware
//Operaciones sobre numeros complejos
//
//@author Beimar Choque Mamani
//@version 1.0
//@date 2024-02-29

class principal{
    public static void main(String[] args){
        System.out.println("numeros complejos");
        Complex x=new Complex(2,3);
        Complex y=new Complex(-5,3);
        Complex z=new Complex(0,0);
        z=x.adition(y);
        System.out.println(z.toStr());
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
    String toStr(){
        return (String.valueOf(this.real)+ "+" + String.valueOf(this.img)+"i");
    }
}

