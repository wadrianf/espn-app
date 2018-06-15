import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


@Injectable()
export class EspnProvider {

  constructor(public http: Http) {
    console.log('Hello EspnProvider Provider');
  }

}