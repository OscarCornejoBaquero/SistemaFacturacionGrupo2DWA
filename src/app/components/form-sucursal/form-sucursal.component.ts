import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.css']
})
export class FormSucursalComponent {
  constructor(private router:Router)
  {
    
  }
  cambioPag(valor :string){
    this.router.navigate([valor]);
  }
}
