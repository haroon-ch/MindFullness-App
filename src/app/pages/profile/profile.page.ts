import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  sowButton: boolean = false;
  enableInput : boolean = true;
  changeIcon: boolean = true;
  public loginDetails:any;
  public userData : any = {u_id:'', first_name:'', last_name:'', email:'', password:''}
  public getData : any = {email:'', password:''}
  constructor(private router: Router,  public apicall:ApiService, public global:GlobalService) { }
  enable(){
    this.changeIcon = !this.changeIcon;
    this.enableInput = ! this.enableInput;
    this.sowButton = ! this.sowButton;
  }

  ngOnInit() {
    this.global.ProfileData.subscribe(res =>{
      this.userData = res.user
      console.log(this.userData);
    })
  }
  updatePeofile(){
    this.apicall.api_updateProfile(this.userData)
  }

}
