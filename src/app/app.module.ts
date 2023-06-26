import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { InfoEmpresasComponent } from './components/info-empresas/info-empresas.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';
import { FormEmpresaComponent } from './components/form-empresa/form-empresa.component';
import { FormSucursalComponent } from './components/form-sucursal/form-sucursal.component';
import { FormPuntoComponent } from './components/form-punto/form-punto.component';
import { GestionComprasComponent } from './components/gestion-compras/gestion-compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneradorFacturasComponent } from './components/generador-facturas/generador-facturas.component';
import { FacturasGeneradasComponent } from './components/facturas-generadas/facturas-generadas.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { GestionProductoComponent } from './components/gestion-producto/gestion-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoEmpresasComponent,
    SucursalesComponent,
    PuntoVentaComponent,
    FormEmpresaComponent,
    FormSucursalComponent,
    FormPuntoComponent,
    GestionComprasComponent,
    GeneradorFacturasComponent,
    FacturasGeneradasComponent,
    BodegaComponent,
    GestionProductoComponent
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
