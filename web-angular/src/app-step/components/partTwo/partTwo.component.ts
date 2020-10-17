import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'part-two',
  templateUrl: './partTwo.component.html',
})
export class PartTwoComponent implements OnChanges  {
  onInit: string = ''
  onChange: string = ''

  ngOnInit() {
    this.onInit = 'enter part two on init'
    console.log(this.onInit) // i don't want this to be process if i still at step one
  }

  ngOnChanges() {}
}