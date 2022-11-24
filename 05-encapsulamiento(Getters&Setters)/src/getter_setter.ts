class FigurasGeometricas {
    protected _nombre_figura: string = "cuadrado";
    private _color: string = "red";
    private _tamaño_figura: string = "grande";

    public get nombre_figura() {return this._nombre_figura;
    }
    public get color() {return this._color;
    }   
    public get tamaño_figura() {return this._tamaño_figura;
    }
    
    public set nombre_figura(thesem: string){this._nombre_figura = thesem;
    }
    public set color(thesem: string) {this._color = thesem;
    }
    public set tamaño_figura(thecourse: string) {this._tamaño_figura= thecourse;
    }
    }

class Rectangulo extends FigurasGeometricas{
    private _longitud:number = 90;
    private _ancho:number = 89;
     
    public get longitud() {return this._longitud;
    }
    public get ancho() {return this._ancho;
    }

    public set longitud(a:number) {this._longitud = a;
    }
    public set ancho(a:number) {this._ancho = a;
    }

}

class Triangulo extends FigurasGeometricas {
    private _base:number = 54;
    private _altura:number = 55;
    
    public get base() {return this._base;
    }
    public get altura() {return this._altura;
    }   
   
    public set base(a:number) {this._base = a;
    }

    public set altura(a:number) {this._altura = a;
    }   
     
}
class Circulo extends FigurasGeometricas {
    private _radio:number = 45;
    private _pi:number = 1;
    
    public get radio() {return this._radio;}
    public get pi() {return this._pi;}   
   
    public set radio(a:number) {this._radio = a;}
    public set pi(a:number) {this._pi = a;}   
       
}
  
let rectangulo = new Rectangulo();
let triangulo = new Triangulo ();
let circulo = new Circulo();

rectangulo.nombre_figura = "rectángulo";
rectangulo.tamaño_figura = "pequeno";
rectangulo.color ="red";
rectangulo.longitud = 11;
rectangulo.ancho= 22;

triangulo.nombre_figura = "triángulo rectangulo"
triangulo.tamaño_figura = "grande"
triangulo.color ="black";
triangulo.base = 3 ;
triangulo.altura = 77;

circulo.nombre_figura = "círculo"
circulo.tamaño_figura = "mediano"
circulo.color ="blue";
circulo.radio = 1 ;
circulo.pi = 3.141516;

console.log("Esta figura geométrica se llama:",rectangulo.nombre_figura)
console.log("Su tamaño es:",rectangulo.tamaño_figura)
console.log("De color:",rectangulo.color)
console.log("Su longitud es de:",rectangulo.longitud + " metros" )
console.log("El ancho es de:",rectangulo.ancho + " metros" )

console.log("Esta figura geometrica se llama:",triangulo.nombre_figura)
console.log("Su tamaño es:",triangulo.tamaño_figura)
console.log("De color:",triangulo.color)
console.log("Su base tiene",triangulo.base + " centimetros")
console.log("Su altura es de:",triangulo.altura + " centimetros")

console.log("Esta figura geometrica se llama:",circulo.nombre_figura)
console.log("Su tamaño es:",circulo.tamaño_figura)
console.log("De color:",circulo.color)
console.log("Su radio es de",circulo.radio + " centimetros")
console.log("El valor de pi es de:",circulo.pi + " centimetros")
