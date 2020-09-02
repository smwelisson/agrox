import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirContaPage } from './excluir-conta.page';

describe('ExcluirContaPage', () => {
  let component: ExcluirContaPage;
  let fixture: ComponentFixture<ExcluirContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirContaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
