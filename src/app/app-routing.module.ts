import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoEmpresasComponent } from './components/info-empresas/info-empresas.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';
import { FormEmpresaComponent } from './components/form-empresa/form-empresa.component';
import { FormSucursalComponent } from './components/form-sucursal/form-sucursal.component';
import { FormPuntoComponent } from './components/form-punto/form-punto.component';
import { GestionComprasComponent } from './components/gestion-compras/gestion-compras.component';
import { GeneradorFacturasComponent } from './components/generador-facturas/generador-facturas.component';
import { FacturasGeneradasComponent } from './components/facturas-generadas/facturas-generadas.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GestionProductoComponent } from './components/gestion-producto/gestion-producto.component';
const routes: Routes =[
  {path: '', redirectTo: 'empresa', pathMatch: 'full'},
  {path: 'producto',component:GestionProductoComponent},
  {path: 'empresa', component: InfoEmpresasComponent},
  {path: 'agregarEmpresa', component: FormEmpresaComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'agregarSucursal', component: FormSucursalComponent},
  {path: 'punto', component: PuntoVentaComponent},
  {path: 'agregarPunto', component: FormPuntoComponent},
  {path: 'gestionCompras', component: GestionComprasComponent},
  {path: 'generadorFacturas', component: GeneradorFacturasComponent},
  {path: 'generador', component: GeneradorFacturasComponent},
  {path: 'facturas', component: FacturasGeneradasComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: '**', redirectTo: 'empresa', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
