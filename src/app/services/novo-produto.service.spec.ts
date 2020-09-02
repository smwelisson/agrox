import { TestBed } from '@angular/core/testing';

import { NovoProdutoService } from './novo-produto.service';

describe('NovoProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovoProdutoService = TestBed.get(NovoProdutoService);
    expect(service).toBeTruthy();
  });
});
