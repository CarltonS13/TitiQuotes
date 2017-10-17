import { Component } from '@angular/core';

import { QuotePage } from '../quote/quote';
import { ContactPage } from '../contact/contact';
import { FavsPage } from '../favs/favs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = QuotePage;
  tab2Root = FavsPage;
  tab3Root = ContactPage;

  constructor() {
  }

}
