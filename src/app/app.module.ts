import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginModal } from '../app/components/login_modal/login.modal';
import { SigninModal } from '../app/components/signin_modal/signin.modal';
import { MainPopover } from './components/main_popover/main.popover';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { UserInfoService } from './services/user-info.service';
import { SearchHotelService } from './services/search-hotel.service';
import { SearchRoomsService } from './services/search-rooms.service';
import { DatePickerModule } from 'ionic4-date-picker';

@NgModule({
  declarations: [AppComponent, LoginModal, SigninModal, MainPopover],
  entryComponents: [LoginModal, SigninModal, MainPopover],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    UserInfoService,
    SearchHotelService,
    SearchRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
