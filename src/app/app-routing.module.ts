import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'detail/:id', loadChildren: './hero-detail/hero-detail.module#HeroDetailModule' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
