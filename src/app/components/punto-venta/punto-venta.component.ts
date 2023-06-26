import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent {
  constructor(private router:Router)
  {
    
  }

  cambioPag(valor :string){
    this.router.navigate([valor]);
  }
}
