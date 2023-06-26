import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorFacturasComponent } from './generador-facturas.component';

describe('GeneradorFacturasComponent', () => {
  let component: GeneradorFacturasComponent;
  let fixture: ComponentFixture<GeneradorFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneradorFacturasComponent]
    });
    fixture = TestBed.createComponent(GeneradorFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
