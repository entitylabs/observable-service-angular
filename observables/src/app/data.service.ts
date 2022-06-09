import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Subject<string> = new Subject<string>();


  constructor() { }

  submit(val:string){
  
    this.data.next(val);
  }
}
