import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoDetalles } from './dialogo-detalles';

describe('DialogoDetalles', () => {
  let component: DialogoDetalles;
  let fixture: ComponentFixture<DialogoDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
