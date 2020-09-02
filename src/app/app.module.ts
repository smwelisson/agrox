import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {Camera} from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    CookieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}