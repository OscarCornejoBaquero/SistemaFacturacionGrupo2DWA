import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent {
  constructor(private router:Router)
  {
    
  }
  cambioPag(){
    this.router.navigate(['/empresa']);
  }
}
