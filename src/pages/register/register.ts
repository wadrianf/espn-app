import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.loadingCtrl.create({
      content: message,
      duration: 4000
    }).present();
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registrado!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Registrar usuário com ', this.user.value, this.password.value);
  }

}
