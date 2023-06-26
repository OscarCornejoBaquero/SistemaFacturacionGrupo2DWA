import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComprasComponent } from './gestion-compras.component';

describe('GestionComprasComponent', () => {
  let component: GestionComprasComponent;
  let fixture: ComponentFixture<GestionComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionComprasComponent]
    });
    fixture = TestBed.createComponent(GestionComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
