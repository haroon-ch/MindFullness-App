import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit {
  @Input() data:any;
 

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.newMsg);
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  
 public messages = [
    {
      user: '',
      createdAt: '',
      msg: ''
    },
    {
      user: 'Angular',
      createdAt: 150027234,
      msg: 'working on ionic'
    },
    {
      user: 'Ionic',
      createdAt: 150025234,
      msg: 'lorem ipsum '
    },
  ];
  currentUser = 'Ionic';

  newMsg = '';

  @ViewChild(IonContent) content: IonContent


  sendMessage(){
    this.messages.push({
      user: 'Ionic',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
  // async takePictureBase64(){
  //   const img = await Camera.getPhoto({
  //     quality:90,
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Prompt,
  //   });
  //   document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,`+img.base64String );
  //   console.log(img.base64String);
  //   this.addNewCriminal.image = img.base64String;
  // }

}
