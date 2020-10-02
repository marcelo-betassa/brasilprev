import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPokemonPorNomeComponent } from './busca-pokemon-por-nome.component';

describe('BuscaPokemonPorNomeComponent', () => {
  let component: BuscaPokemonPorNomeComponent;
  let fixture: ComponentFixture<BuscaPokemonPorNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaPokemonPorNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPokemonPorNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
