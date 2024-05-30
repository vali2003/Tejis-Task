import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ManagebooksComponent } from './managebooks/managebooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';


const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddbooksComponent},
      {path:'manage',component:ManagebooksComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
