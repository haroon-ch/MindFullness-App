import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private profileData = new BehaviorSubject<any>('');
  public ProfileData = this.profileData.asObservable();
  set_profileData(profileData: any)
  {
    this.profileData.next(profileData); 
     console.log(profileData);
  }

  private postData = new BehaviorSubject<any>('');
  public PostData = this.postData.asObservable();
  set_postData(postData: any)
  {
    this.postData.next(postData); 
     console.log(postData);
  }
  
}
