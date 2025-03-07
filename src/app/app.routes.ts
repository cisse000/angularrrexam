import { Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {UserViewComponent} from './components/user/user-view/user-view.component';
import {UserCreateComponent} from './components/user/user-create/user-create.component';
import {UserEditComponent} from './components/user/user-edit/user-edit.component';
import {AccueilComponent} from './components/accueil/accueil.component';
import {ProfilComponent} from './components/profil/profil.component';
import {CoursViewComponent} from './components/accueil/cours-view/cours-view.component';
import {InscriptionsComponent} from './components/inscription/inscriptions.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'user',
    title: 'Nos tatoueurs',
    component: UserComponent,
  },
  {
    path: 'cours/:coursId/view',
    component: CoursViewComponent
  },
  {
    path: 'user/:userId/view',
    component: UserViewComponent
  },
  {
    path: 'user/create',
    component: UserCreateComponent
  },
  {
    path: 'user/:userId/edit',
    component: UserEditComponent
  },
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },

  {
    path: 'profil',
    title: 'Mon profil',
    component: ProfilComponent,
  },

  {
    path: 'inscriptions',
    title: 'Mes inscriptions',
    component: InscriptionsComponent,
  },
];
