import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AppsProvider } from "../../assets/apps";
import {LockScreenPage} from "../lock-screen/lock-screen";
import {Observable} from "rxjs";
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
  public buttonsData : any;
  public timer : any;
  public maxTickCount: number = 30;
  public observer : any;
  constructor(
    public appProv : AppsProvider,
    private iab: InAppBrowser,
    public navCtrl: NavController) {
    this.buttonsData = this.appProv.apps;
    console.log(this.buttonsData);
    this.timeNoActive = +1;
    this.observer = Observable.timer(1000, 500);
    this.timer = this.observer.subscribe((x)=>this.subscribeObs(x));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
