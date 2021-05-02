import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  do: string = "";
  toDo: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  submit(){
    if(this.do) {
      this.toDo.push(this.do);
    }
    this.do = '';
  }

}
