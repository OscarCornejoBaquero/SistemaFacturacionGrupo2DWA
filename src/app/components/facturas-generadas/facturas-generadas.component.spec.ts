import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasGeneradasComponent } from './facturas-generadas.component';

describe('FacturasGeneradasComponent', () => {
  let component: FacturasGeneradasComponent;
  let fixture: ComponentFixture<FacturasGeneradasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasGeneradasComponent]
    });
    fixture = TestBed.createComponent(FacturasGeneradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
