import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// part one component
import { PartOneComponent } from './components/partOne/partOne.component'
import { PartTwoComponent } from './components/partTwo/partTwo.component'
import { PartThreeComponent } from './components/partThree/partThree.component'
import { PartFourComponent } from './components/app-bar/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaService } from './components/empresa/service/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoService } from './components/producto/service/producto.service';
import { VentaService } from './components/venta/service/venta.service';
import { VentaComponent } from './components/venta/venta.component';
import { VentaFechaService } from './components/venta-fecha/service/venta-fecha.service';
import { VentaFechaComponent } from './components/venta-fecha/venta-fecha.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule , NgxChartsModule,
    BrowserAnimationsModule, HttpClientModule ],
  declarations: [ AppComponent, EmpresaComponent,ProductoComponent,VentaComponent, VentaFechaComponent, PartTwoComponent, PartThreeComponent,PartFourComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [EmpresaService,ProductoService,VentaService,VentaFechaService]
})
export class AppModule { }
