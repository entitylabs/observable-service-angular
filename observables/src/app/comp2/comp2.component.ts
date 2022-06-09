import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  receivedvalue:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.data.subscribe(data=>{
      this.receivedvalue=data;
    });
  }

}
