import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'part-three',
  templateUrl: './partThree.component.html',
})
export class PartThreeComponent implements OnChanges {
  onInit: string = ''
  onChange: string = ''

  ngOnInit() {
    this.onInit = 'enter part three on init'
    console.log(this.onInit) // i don't want this to be process if i still at step one or two
  }

  ngOnChanges() {}
}