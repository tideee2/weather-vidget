import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../config/config";
import {Observable} from "rxjs";

/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {
  myDate: String ;
  s = API_URL;
  public temperature :Observable<any>;
  public www :any;
  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.temperature = this.http.get(API_URL);
    this.temperature
      .subscribe(data => {
        let dayNow = new Date();
        console.log('my data: ', data);
        this.www = data.list.filter(val=>{
          let temp = new Date(val.dt*1000);
          return temp.getHours() == 15;
        });
        console.log(this.www[0].weather[0].icon);
      });
    console.log(this.temperature);
    console.log(this.www);
    this.myDate = JSON.stringify(this.getFormattedDate(new Date()));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockScreenPage');
    console.log('ffff');
  }
  getCurrentDate():any{
    this.myDate= new Date().toISOString();
    console.log(this.myDate);
    console.log(JSON.stringify(this.getFormattedDate(new Date())));
  }
  getFormattedDate(date:Date):any{
    let day = date.getDay();
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let hours = date.getHours();
    hours = (hours == 0) ? 12 : (hours > 12) ? hours - 12: hours;
    let x = (hours > 11) ? ' PM' : ' AM';

    let minutes = date.getMinutes();
    let month = date.getMonth();
    const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return {
      days: weekdays[day],
      month: mounths[month],
      hours: hours + x,
      minutes: minutes
    }
  }
  cl(){

  }
}
