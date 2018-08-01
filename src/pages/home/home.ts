import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AppsProvider } from "../../assets/apps";
import { apps } from "../../assets/apps2";
import {LockScreenPage} from "../lock-screen/lock-screen";

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
  public buttonsData  = apps;
  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController) {
    console.log(this.buttonsData);
  }
  openBrowser(url:string):void{
    this.iab.create(url, '_self')
  }
  goToLockscreen():void{
    console.log('123');
    this.navCtrl.setRoot(LockScreenPage,{})
  }
}
