import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RetrieverComponent } from './pages/auth/retriever/retriever.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export function getDefaultRoutes(): Routes {
  return [{ path: 'home', component: HomeComponent }];
}

export function getSecurityRoutes(): Routes {
  return [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'retriever', component: RetrieverComponent },
  ];
}

export function getConfiguredRoutes(): Routes {
  return [
    { path: 'not-found', component: NotFoundComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' },
  ];
}

export const appRoutes: Routes = [...getDefaultRoutes(), ...getSecurityRoutes(), ...getConfiguredRoutes()];
