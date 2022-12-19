import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactive.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SelectNoteViewComponent } from './select-note-view/select-note-view.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: "login", component: LoginComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: "home/:id", component: SelectNoteViewComponent ,canActivate: [AuthGuard], canDeactivate:[CanDeactivateGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
