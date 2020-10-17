import { Component, NgModule, OnInit } from '@angular/core';
import { multi } from './data';
import { VentaFecha } from './model/venta-fecha';
import { BarData } from './model/serie';
import { VentaFechaService } from './service/venta-fecha.service';

@Component({
  selector: 'app-venta-fecha',
  templateUrl: './venta-fecha.component.html',
  styleUrls: ['./venta-fecha.component.css']
})
export class VentaFechaComponent implements OnInit {
  view: any[] = [1200, 600];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fecha';
  yAxisLabel: string = 'Total Venta';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  ventas: VentaFecha[];	 
  listaBarData: BarData[];
  constructor(private ventaService:VentaFechaService) {
    console.log(multi);
    console.log(this.listaBarData);
    
  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit() {
    this.ventaService.buscarVenta().subscribe(data => {
      this.ventas = data;
      var listaBarData = this.ventaService.convertirSerie(this.ventas);
      console.log(listaBarData);
      Object.assign(this, {listaBarData});
    });
  }
}