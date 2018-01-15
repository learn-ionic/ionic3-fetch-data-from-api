import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// API:
import { ApiProvider } from '../../providers/api/api' // Import our provider. Also included in home.module.ts file

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  coins = []; /* declare coins as array */

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider /* declare ApiPrivider */) {
    this.apiProvider.getCoins().subscribe(data => { this.coins = data }); // Loading the Data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
