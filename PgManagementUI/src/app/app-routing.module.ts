import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeddetailsComponent } from './beddetails/beddetails.component';
import { BedsComponent } from './beds/beds.component';
import { FourSharingComponent } from './four-sharing/four-sharing.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { SixSharingComponent } from './six-sharing/six-sharing.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: AddUserComponent
  },
  {
    path: 'user-home',
    component: UserHomeComponent
  },
  {
    path: 'beds',
    component: BedsComponent
  },
  {
    path : 'user-home/3sharing',
    component : BeddetailsComponent
  },
  {
    path : '4sharing',
    component : FourSharingComponent
  },
  {
    path : '6sharing',
    component : SixSharingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
