import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  text: string;

  @Output()
  sendMessage: EventEmitter<string> = new EventEmitter<string>();

  @Output('getPoker')
  emitPoke: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  clickSendMessage() {
    if(this.text.length > 0) {
      this.sendMessage.emit(this.text);
    }
  }

  clickEmitPoker(){
    this.emitPoke.emit();
  }

}
