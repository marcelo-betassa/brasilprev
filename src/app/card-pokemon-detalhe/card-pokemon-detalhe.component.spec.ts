import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonDetalheComponent } from './card-pokemon-detalhe.component';

describe('CardPokemonDetalheComponent', () => {
  let component: CardPokemonDetalheComponent;
  let fixture: ComponentFixture<CardPokemonDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPokemonDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPokemonDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
