import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  @ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  signIn() {
  	this.navCtrl.push(LoginPage);
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
