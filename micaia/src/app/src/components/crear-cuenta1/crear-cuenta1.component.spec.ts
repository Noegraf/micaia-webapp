import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuenta1Component } from './crear-cuenta1.component';

describe('CrearCuenta1Component', () => {
  let component: CrearCuenta1Component;
  let fixture: ComponentFixture<CrearCuenta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCuenta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuenta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
