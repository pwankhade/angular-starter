import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "src/app/landing/landing.component";
import { LoginComponent } from "src/app/login/login.component";


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
