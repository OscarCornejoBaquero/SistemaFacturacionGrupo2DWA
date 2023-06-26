import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmpresasComponent } from './info-empresas.component';

describe('InfoEmpresasComponent', () => {
  let component: InfoEmpresasComponent;
  let fixture: ComponentFixture<InfoEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoEmpresasComponent]
    });
    fixture = TestBed.createComponent(InfoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
