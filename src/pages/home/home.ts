import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private espnurl: string = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=208c0641465c446686bbe4f4da695a62';
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {

    this.http.get(this.espnurl)
    .map(res => res.json())
    .subscribe(data => {
      this.dados = data.articles;
    });
    
  }
}
