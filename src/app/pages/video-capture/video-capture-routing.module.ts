import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCapturePage } from './video-capture.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCapturePageRoutingModule {}
