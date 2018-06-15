import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.loadingCtrl.create({
      content: message,
      duration: 4000
    }).present();
  }

  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        this.alert('Seja bem-vido ao ESPN.');
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
    console.log('Entrar com ', this.user.value, this.password.value);
  }

}
