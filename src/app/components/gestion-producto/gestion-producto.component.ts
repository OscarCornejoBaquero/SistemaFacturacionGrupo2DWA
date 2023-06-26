import { Component } from '@angular/core';
import { Producto } from '../Producto';
@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent {
  NombreProducto="";
  CategoriaP="";
  codigoP="";
  DescripcionP="";
  valor = 0;
  
  listProductos: Producto[]=[];
  ngOnInit():void {
  }
  agregarProducto() {
    const producto: Producto = {
     NombreProducto:this.NombreProducto,
     CategoriaP:this.CategoriaP,
      codigoP:this.codigoP,
      DescripcionP:this.DescripcionP,
      valor :this.valor,
    }

   this.listProductos.push(producto);
    this.NombreProducto="";
    this.CategoriaP="";
    this.codigoP="";
    this.DescripcionP="";
    this.valor;
    

    
}
eliminarProducto(indice:number):void{
  this.listProductos.splice(indice,1);

}
}
