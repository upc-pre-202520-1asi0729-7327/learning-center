import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';
const about = () => import('./shared/presentation/views/about/about').then(m => m.About);
const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);

const baseTitle = 'ACME Learning Center';
export const routes: Routes = [
  { path: 'home',   component: Home,              title: `Home - ${baseTitle}` },
  { path: 'about',  loadComponent: about,         title: `About - ${baseTitle}` },
  { path: '',       redirectTo: '/home',          pathMatch: 'full' },
  { path: '**',     loadComponent: pageNotFound,  title:  `Page Not Found - ${baseTitle}` }
];
