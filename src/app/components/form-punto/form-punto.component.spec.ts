import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPuntoComponent } from './form-punto.component';

describe('FormPuntoComponent', () => {
  let component: FormPuntoComponent;
  let fixture: ComponentFixture<FormPuntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPuntoComponent]
    });
    fixture = TestBed.createComponent(FormPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
