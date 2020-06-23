import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFormularioComponent } from './adicionar-formulario.component';

describe('AdicionarFormularioComponent', () => {
  let component: AdicionarFormularioComponent;
  let fixture: ComponentFixture<AdicionarFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
