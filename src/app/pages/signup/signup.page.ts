import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public userData : any = {first_name:'', last_name:'', email:'', password:''}

  constructor(public apical: ApiService, public global: GlobalService) { }

  ngOnInit() {
  }
  submit(){
    console.log(this.userData);
    this.apical.api_signup(this.userData)
    this.userData = {first_name:'', last_name:'', email:'', password:''}
    
  }


}
