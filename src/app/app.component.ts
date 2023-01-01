import { Component } from '@angular/core';
import OneSignal from "onesignal-cordova-plugin";
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( platform: Platform ) {
    platform.ready().then(() => {
      this.OneSignalInit();
    });
    this.setupListener().then(r => {
      console.log(r);
    });
  }
  async setupListener() {
    App.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) {
        // App went to background
        // Save anything you fear might be lost
      } else {
        // App went to foreground
        // restart things like sound playing
      }
    });

    App.addListener('backButton', (data) => {
      console.log('back button click:', JSON.stringify(data));
      if (data.canGoBack) {
        window.history.back();
      } else {
        // Maybe show alert before closing app?
        App.exitApp();
      }
    });
  }
  OneSignalInit() {
    OneSignal.setAppId('caf50524-32e2-45c7-a365-e0c49250ddbf');
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
  }
  
}
