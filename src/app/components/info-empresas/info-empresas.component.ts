import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-empresas',
  templateUrl: './info-empresas.component.html',
  styleUrls: ['./info-empresas.component.css']
})
export class InfoEmpresasComponent {
  constructor(private router:Router)
  {
    
  }

  cambioPag(valor :string){
    this.router.navigate([valor]);
  }

}
