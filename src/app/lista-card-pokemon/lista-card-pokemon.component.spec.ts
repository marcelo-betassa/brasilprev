import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardPokemonComponent } from './lista-card-pokemon.component';

describe('ListaCardPokemonComponent', () => {
  let component: ListaCardPokemonComponent;
  let fixture: ComponentFixture<ListaCardPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCardPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCardPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
