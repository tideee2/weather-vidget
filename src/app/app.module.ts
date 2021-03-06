import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import {LockScreenPage} from "../pages/lock-screen/lock-screen";
import {HttpClientModule} from "@angular/common/http";
import {PipesModule} from "../pipes/pipes.module";
import {AppsProvider} from "../assets/apps";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LockScreenPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LockScreenPage
  ],
  providers: [
    AppsProvider,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
