import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListPage } from './pokemon-list.page';

describe('Tab1Page', () => {
  let component: PokemonListPage;
  let fixture: ComponentFixture<PokemonListPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PokemonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
