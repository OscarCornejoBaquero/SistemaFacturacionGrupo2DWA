import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-punto',
  templateUrl: './form-punto.component.html',
  styleUrls: ['./form-punto.component.css']
})
export class FormPuntoComponent {
  constructor(private router:Router)
  {
    
  }
  cambioPag(valor :string){
    this.router.navigate([valor]);
  }
}
