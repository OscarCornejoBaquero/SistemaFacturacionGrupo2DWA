import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generador-facturas',
  templateUrl: './generador-facturas.component.html',
  styleUrls: ['./generador-facturas.component.css']
})
export class GeneradorFacturasComponent {
  facturaForm: FormGroup;
  facturaGenerada: boolean = false;
  Facturaslista: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.facturaForm = this.formBuilder.group({
      nombreCliente: ['', Validators.required],
      montoFactura: ['', Validators.required]
    });
  }
  imprimirFactura(){}
  generarFactura() {
    if (this.facturaForm.invalid) {
      return;
    }
    
    var factura = {
      n: this.facturaForm.get('nombreCliente')?.value,
      m: this.facturaForm.get('montoFactura')?.value
    };

    this.Facturaslista.push(factura);
    this.facturaGenerada = true;
  }

  calcularValorTributario() {
    // Lógica para calcular el valor tributario de la factura (puedes personalizarla según tus necesidades)
    return this.facturaForm.get('montoFactura')?.value * 0.12;
  }

  generarContenidoArchivo(): string {
    let contenido = '';
    for (const factura of this.Facturaslista) {
      contenido += `Cliente: ${factura.n}\n`;
      contenido += `Monto: ${factura.m}\n`;
      contenido += `Valor Tributario: ${this.calcularValorTributario()}\n\n`;
    }
    return contenido;
  }

  descargarArchivo() {
    const contenido = this.generarContenidoArchivo();
    const nombreArchivo = 'facturas.txt';

    const elementoLink = document.createElement('a');
    elementoLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    elementoLink.setAttribute('download', nombreArchivo);
    elementoLink.style.display = 'none';

    document.body.appendChild(elementoLink);
    elementoLink.click();
    document.body.removeChild(elementoLink);
  }
}
