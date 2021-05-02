import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-change',
  templateUrl: './ng-on-change.component.html',
  styleUrls: ['./ng-on-change.component.css']
})
export class NgOnChangeComponent implements OnInit {

  lastName: string;
  firstName: string;

  messages: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSendMessage(message: string) {
    this.messages.push(message);
  }

  onSendPoker() {
    this.messages.push('POKER');
  }

}
