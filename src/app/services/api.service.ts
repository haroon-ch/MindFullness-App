import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { TostService } from './tost.service';
import { OneSignalService } from './onesignal.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  response: any;
  data: any;
  data1: any;
  data2: any;
  constructor(private authservice: AuthService, private global: GlobalService, private tost: TostService, private route:Router, public oneSignal: OneSignalService) { }

    async api_signup(data: any) {
      await this.authservice.con(data , 'signup').then((result) => {
         this.data = JSON.parse(String(result));
         if(this.data.error === true){
           console.log(this.data);
           this.route.navigate(['login'])
           return;
         }
         else{
          console.log(this.data);
          console.log("userAlready");
          
         }
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }

    async api_login(data: any) {
      await this.authservice.con(data , 'login').then((result) => {
         this.data = JSON.parse(String(result));
         if(this.data.error === false){
           console.log(this.data);
           this.global.set_profileData(this.data)
           this.route.navigate(['home'])
           return;
         }
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }

    async api_updateProfile(data: any) {
      await this.authservice.con(data , 'updateProfile').then((result) => {
         this.data = JSON.parse(String(result));
         if(this.data.error === false){
           console.log(this.data);
          //  this.global.set_profileData(this.data)
           this.route.navigate(['login'])
           return;
         }
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }

    async api_CreatePost(data: any) {
      await this.authservice.con(data , 'createpost').then((result) => {
         this.data = JSON.parse(String(result));
         if(this.data.error === false){
           console.log(this.data);
            this.oneSignal.sendNotification('New Post Created', data.description)
          //  this.global.set_profileData(this.data)
           return;
         }
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }

     async api_getPost() {
      await this.authservice.getdata('postget').then((result) => {
          this.data = JSON.parse(String(result));
         console.log(this.data);
          this.global.set_postData(this.data);
        }, (err) => {
          console.log(err);
        });
      }

}
