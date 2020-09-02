import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarProdutosPage } from './alterar-produtos.page';

describe('AlterarProdutosPage', () => {
  let component: AlterarProdutosPage;
  let fixture: ComponentFixture<AlterarProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarProdutosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
