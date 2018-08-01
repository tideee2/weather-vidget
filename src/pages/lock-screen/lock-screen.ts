import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {API_URL, API_URL2} from "../../config/config";
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
  myDate: Object ;
  s = API_URL;
  public temperature :Object[];
  public getTemperature :Observable<any>;
  public arrayTemps :any;
  public cityName : string;
  public temperatureNew: Observable<any>;
  public tIcon : string = '';
  public currentTemp : number;
  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.myDate = this.getFormattedDate(new Date());
    this.getTemperature = this.http.get(API_URL2);
    this.getTemperature.subscribe(data=>{
      this.cityName = data.location.name;
      this.tIcon = data.current.condition.icon;
      this.currentTemp = data.current.temp_c;
      this.temperature = (data.forecast.forecastday);
      console.log(this.temperature);
    });
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
    let monthDay = date.getDate();

    let day = date.getDay();
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let hours = date.getHours();
    let x = (hours > 11) ? ' PM' : ' AM';
    hours = (hours == 0) ? 12 : (hours > 12) ? hours - 12: hours;

    let minutes = date.getMinutes();
    let month = date.getMonth();
    const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let year = date.getFullYear();
    return {
      day: weekdays[day],
      month: mounths[month],
      monthDay: monthDay,
      time: hours+':'+minutes+' '+x,
      hours: hours + x,
      minutes: minutes,
      year: year
    }
  }
  cl(){

  }
}
