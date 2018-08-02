import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AppsProvider } from "../../assets/apps";
import { apps } from "../../assets/apps2";
import {LockScreenPage} from "../lock-screen/lock-screen";
import {Observable, TimeInterval} from "rxjs";
import {RXJS} from "@ionic/app-scripts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public options: InAppBrowserOptions = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'no'
  };
  public timeNoActive : number = 0;
  public browserLink : string='';
  public buttonsData  = apps;
  public timer : any;
  public maxTickCount: number = 30;
  public observer : any;
  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController) {
    console.log(this.buttonsData);
    this.timeNoActive = +1;
    this.observer = Observable.timer(1000, 500);
    this.timer = this.observer.subscribe((x)=>this.subscribeObs(x));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    // this.startTimer(this.timeNoActive);
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    this.timer.unsubscribe();

  }
  subscribeObs(x):any{
    if (x > this.maxTickCount) {
      console.log('timerStop');
      this.timer.unsubscribe();
      this.navCtrl.setRoot(LockScreenPage,{});
    }
    console.log(x);
  }
  openBrowser(url:string):void{
    // this.browserLink = url;
    this.iab.create(url, '_self');
  }
  goToLockscreen():void{
    console.log('123');
    this.timer.unsubscribe();
    this.navCtrl.setRoot(LockScreenPage,{})
  }
  resetTimer():void{
    this.timer.unsubscribe();
    this.timer = this.observer.subscribe((x)=>this.subscribeObs(x));
    console.log('ff');
  }
}
