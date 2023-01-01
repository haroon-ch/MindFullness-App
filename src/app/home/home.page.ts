
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';


import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModelPage } from '../pages/model/model.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public userData : any;
  public allPost : any;
  public posts: any = [{id:'0',v_id:'0',name:'Zagham', time:'4min',v_path1:'./../../assets/test1.mp4',v_path2:'./../../assets/test1.mp4'},
  {id:'1',v_id:'1',name:'Nadeem', time:'3min',v_path1:'./../../assets/test2.mp4',v_path2:'./../../assets/test2.mp4'},
  {id:'2',v_id:'2',name:'Ali', time:'3days' ,v_path1:'./../../assets/test3.mp4',v_path2:'./../../assets/test3.mp4'}];

public filters: any = [{name:'None'},
    {name:'Toaster'},
    {name:'Brightness'},
    {name:'Hudson'},
    {name:'Earlybird'},
    {name:'Lofi'},
    {name:'Nashville'},
    {name:'Hue'},
    {name:'Saturation'},
    {name:'Contrast'},
    {name:'Invert'},
    {name:'Sepia'},
    {name:'Gray-scale'}];
public value: boolean = false ;
public toggle: boolean = true;
class: string;


  public postData: any = {u_id:'', description:'', video:''}
  constructor(public global: GlobalService, public apical: ApiService,public route:Router,public modalController: ModalController) {}
 
  slideOpts = {
    slidesPerView: 4,
  };
  getShortName(fullName) {
    return fullName.split(' ').map(n => n[0]).join('');
  }
  ngOnInit() {
    this.getPost();
    this.global.ProfileData.subscribe(res =>{
      this.userData = res.user.first_name
      this.postData.u_id = res.user.u_id
      console.log(this.userData);
    })

  }

  async takePictureBase64(){
    const img = await Camera.getPhoto({
      quality:90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true
    });
    // document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,`+img.base64String );
    console.log(img.base64String);    
    this.postData.video = img.base64String;
  }


 async submitPost(){
    console.log(this.postData);
  await  this.apical.api_CreatePost(this.postData);
   await this.getPost();
  this.postData = {u_id:'', description:'', video:''}
  }

 async getPost(){
  await  this.apical.api_getPost();
  await  this.global.PostData.subscribe(res => {
      this.allPost = res
      console.log(this.allPost);
      
    })
  }

    async presentModal(data) {
      const modal = await this.modalController.create({
        component: ModelPage,
        initialBreakpoint:0.99,
        breakpoints:[0, 0.435, 0.93],
        cssClass: 'my-custom-class',
        componentProps: {
          data
        }
      });
      return await modal.present();
    }
  

change_filter(f , p, i){
  console.log(p);

  console.log(f.name + 'jjh' + p.id);
    if( p.id == p.v_id ){
      console.log('ok')
      this.filers(f,i);  
    }
  
}

filers(f,i){
  const x = document.getElementById('x'+i);
  if(f.name == 'None'){
    // this.class = 'None';
    x.style.filter = 'none'
  }
  if(f.name == 'Toaster'){
    // this.class = 'Bl';
    x.style.filter = 'contrast(1.5) brightness(.9)'
  }
  if(f.name == 'Brightness'){
    // this.class = 'B';
    x.style.filter = 'brightness(50%)'
  }
  if(f.name == 'Hudson'){
    // this.class = 'B';
    x.style.filter = 'brightness(1.2) contrast(.9) saturate(1.1)'
  }
  if(f.name == 'Earlybird'){
    // this.class = 'H';
    x.style.filter = ' contrast(.9) sepia(.2)'
  }
  if(f.name == 'Lofi'){
    // this.class = 'S';
    x.style.filter = 'saturate(1.1) contrast(1.5)'
  }
  if(f.name == 'Nashville'){
    // this.class = 'C';
    x.style.filter = 'sepia(.2) contrast(1.2) brightness(1.05) saturate(1.2)'
  }
  if(f.name == 'Hue'){
    // this.class = 'H';
    x.style.filter = 'hue-rotate(60%)'
  }
  if(f.name == 'Saturation'){
    // this.class = 'S';
    x.style.filter = 'saturate(70%)'
  }
  if(f.name == 'Contrast'){
    // this.class = 'C';
    x.style.filter = 'contrast(40%)'
  }
  if(f.name == 'Invert'){
    // this.class = 'I';
    x.style.filter = 'invert(100%)'
  }
  if(f.name == 'Sepia'){
    // this.class = 'Se';
    x.style.filter = 'sepia(100%)'
  }
  if(f.name == 'Gray-scale'){
    // this.class = 'G';
    x.style.filter = 'grayscale(100%)'
  }
}

}