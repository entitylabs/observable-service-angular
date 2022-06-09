import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  dataField:string='';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  onsubmit(){

    this.dataService.submit(this.dataField);
  }
}
