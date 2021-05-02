import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges {

  changeHistory: string[] = [];

  @Input()
  lastName: string;

  @Input()
  firstName: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let newVal = JSON.stringify(changedProp.currentValue);
      if(newVal) {
        if(changedProp.isFirstChange) {
          this.changeHistory.push(`[${propName}] valeur initiale : ${newVal}`);
        } else {
          let oldVal = JSON.stringify(changedProp.previousValue);
          this.changeHistory.push(`[${propName}] valeur : ${newVal} => ${oldVal}`);
        }
      }
    }
  }

  get data() {
    return { firstName : this.firstName, lastName: this.lastName };
  }

  ngOnInit() {
  }

}
