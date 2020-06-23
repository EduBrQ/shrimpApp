import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormularioComponent } from './card-formulario.component';

describe('CardFormularioComponent', () => {
  let component: CardFormularioComponent;
  let fixture: ComponentFixture<CardFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
