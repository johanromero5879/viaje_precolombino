import { TestBed } from '@angular/core/testing';

import { FormatearTextoService } from './formatear-texto.service';

describe('FormatearTextoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatearTextoService = TestBed.get(FormatearTextoService);
    expect(service).toBeTruthy();
  });
});
