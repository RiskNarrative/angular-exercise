import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchListComponent } from './pages/search-list/search-list.component';
import { AuthGuard } from './auth/auth.gaurd';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';
import { OfficersComponent } from './components/officers/officers.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      },
      {
        path: 'searchlist',
        component: SearchListComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'company/:companyId',
        component: DetailsComponent,
        canActivate: [AuthGuard], // Apply the AuthGuard

      },
      {
        path: 'company/:companyId/officers',
        component: OfficersComponent,
        canActivate: [AuthGuard], // Apply the AuthGuard

      },
      // Add other routes as needed
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
