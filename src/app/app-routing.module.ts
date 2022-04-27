import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { LiveListComponent } from './views/live-list/live-list/live-list.component';
import { LiveRegisterComponent } from './views/live-register/live-register.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'liveList', component: LiveListComponent},
  {path: 'liveRegister', component: LiveRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
