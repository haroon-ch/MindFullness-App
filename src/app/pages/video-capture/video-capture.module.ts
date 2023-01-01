import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCapturePageRoutingModule } from './video-capture-routing.module';

import { VideoCapturePage } from './video-capture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCapturePageRoutingModule
  ],
  declarations: [VideoCapturePage]
})
export class VideoCapturePageModule {}
