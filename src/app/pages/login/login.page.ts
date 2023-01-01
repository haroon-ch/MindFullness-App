import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userData : any = {email:'', password:''}
  constructor(public apical: ApiService, public global: GlobalService) { }

  ngOnInit() {
  }
  submit(){
    console.log(this.userData);
    this.apical.api_login(this.userData)
    this.userData = {email:'', password:''}
    
  }

}
