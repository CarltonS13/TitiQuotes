import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private quotesProvider: QuotesProvider) {

  }


  setNotification(){
    this.quotesProvider.setNotifications();
  }

  cancelNotification(){
    this.quotesProvider.cancelNotifications();
  }

}
