import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
/*
#### LAZY LOADING: IT'S NOT NEEDED ANYMORE TO IMPORT NEW PAGES HERE ####

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { InfoPage } from '../pages/info/info';
*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    // HomePage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
    // AboutPage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
    // InfoPage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
    // AboutPage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
    // InfoPage, LAZY LOADING: NOT NEEDED TO IMPORT PAGE HERE
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
