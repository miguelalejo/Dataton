import { Component, OnInit, ElementRef } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentStep: number;
  private stepper: Stepper;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    const stepperEl = this.elementRef.nativeElement.querySelector('#stepper1');

    stepperEl.addEventListener('show.bs-stepper', event => {
      this.currentStep = event.detail.to;
    });

    this.stepper = new Stepper(stepperEl, {
      linear: false,
      animation: true
    });
  }
}
