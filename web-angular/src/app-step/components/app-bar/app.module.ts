import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PartFourComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
],
  declarations: [ PartFourComponent ],
  bootstrap:    [ PartFourComponent ]
})
export class PartFourModule { }