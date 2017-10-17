import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes'
import { QuotePage } from '../quote/quote'

@Component({
  selector: 'favs',
  templateUrl: 'favs.html'
})
export class FavsPage {

  constructor(public navCtrl: NavController, private quotesSource: QuotesProvider) {
  }

  quoteID: number;
  quotes: any[];
  limit: number;


  ionViewDidLoad() {
    this.quotes = this.quotesSource.getQuotes();
    this.limit = this.quotesSource.getLimit();
  }

  quoteClicked(index: number) {
    this.quotesSource.setCurrent(index);
    this.navCtrl.push( QuotePage);
  }


}
