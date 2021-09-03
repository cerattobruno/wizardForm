import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsuranceComponent } from './components/insurance/insurance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  pathMatch: 'full' },
  { path: 'asegurate', component: InsuranceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
