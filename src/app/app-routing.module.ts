import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//LazyLoading
{path:"Auth",loadChildren:()=>import("./modules/auth/auth.module").then(m => m.AuthModule)},
{path:"Home",loadChildren:()=>import("./modules/home/home.module").then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
