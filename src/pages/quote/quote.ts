import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the quoteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'quote',
  templateUrl: 'quote.html',
})

export class QuotePage {

  constructor(public navCtrl: NavController, private quotesSource: QuotesProvider,  private socialSharing: SocialSharing) {
  }

  id: number = 1;
  quote: string ;



  ionViewDidLoad() {
    this.quote= this.quotesSource.getToday();
  }

  ionViewWillLeave(){
  this.quotesSource.setCurrent(1000);

  }

  share(){
    this.socialSharing.shareWithOptions({
  message: '"' + this.quote + '" \n by Bishop Gideon Titi-Ofei. \n - www.titiofei.org'
});
  }

}
