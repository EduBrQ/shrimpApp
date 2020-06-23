import { TestBed } from '@angular/core/testing';

import { AtualizarRequerimentosCardService } from './atualizar-requerimentos-card.service';

describe('AtualizarRequerimentosCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtualizarRequerimentosCardService = TestBed.get(AtualizarRequerimentosCardService);
    expect(service).toBeTruthy();
  });
});
