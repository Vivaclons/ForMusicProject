import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  lan = "en";
  count = 2;
  constructor() { }

  ngOnInit(): void {
  }
  ru(count){
    if(this.count%2 == 0) {
      this.lan = "ru";
      this.count++;
    }else{
      this.lan = "en";
      this.count++;
    }
  }

}
