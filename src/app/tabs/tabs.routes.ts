import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pokedex',
        loadComponent: () =>
          import('../pokemon-list/pokemon-list.page').then((m) => m.PokemonListPage),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('../pokemon-info/pokemon-info.page').then((m) => m.PokemonInfoPage),
      },
      {
        path: '',
        redirectTo: 'pokedex',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pokedex',
    pathMatch: 'full',
  },
];
