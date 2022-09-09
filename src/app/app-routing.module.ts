import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingHomePageComponent } from './gaming-home-page/gaming-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:GamingHomePageComponent  },
  { path: '**', component:GamingHomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
