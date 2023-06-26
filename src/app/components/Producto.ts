export class Producto {
    NombreProducto: string;
    CategoriaP:string;
    codigoP: string;
    DescripcionP:String;
    valor: number;  
   

    constructor(NombreProducto: string, CategoriaP : string, codigoP : string  ,DescripcionP:string,Valor :number) {
       this.NombreProducto =NombreProducto;
       this.CategoriaP = CategoriaP;
       this.codigoP =codigoP;
       this.DescripcionP=DescripcionP;
       this.valor= 0 ;
       
    }
}