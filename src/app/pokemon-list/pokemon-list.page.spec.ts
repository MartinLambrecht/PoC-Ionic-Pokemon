import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonList } from './pokemon-list.page';

describe('Tab1Page', () => {
  let component: PokemonList;
  let fixture: ComponentFixture<PokemonList>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PokemonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
