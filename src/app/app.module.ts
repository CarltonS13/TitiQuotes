import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { QuotePage } from '../pages/quote/quote';
import { FavsPage } from '../pages/favs/favs';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { QuotesProvider } from '../providers/quotes/quotes';

@NgModule({
  declarations: [
    MyApp,
    QuotePage,
    FavsPage,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotePage,
    FavsPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesProvider
  ]
})
export class AppModule {}
