import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoginComponent } from './user/login/login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { BedsComponent } from './beds/beds.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { BeddetailsComponent } from './beddetails/beddetails.component';
import { FourSharingComponent } from './four-sharing/four-sharing.component';
import { SixSharingComponent } from './six-sharing/six-sharing.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    UserHomeComponent,
    BedsComponent,
    RegestrationComponent,
    AfterLoginComponent,
    BeddetailsComponent,
    FourSharingComponent,
    SixSharingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
