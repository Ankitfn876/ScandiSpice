import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },

  { path: 'home', redirectTo: '', pathMatch: 'full' },

  { path: 'spices', loadComponent: () => import('./pages/spices/spices.component').then(c => c.SpicesComponent) },
  { path: 'blends', loadComponent: () => import('./pages/blends/blends.component').then(c => c.BlendsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },

  { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) }
];

