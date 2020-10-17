import { Component, NgModule, OnInit } from '@angular/core';
import { multi } from './data';
import { Venta } from './model/venta';
import { BarData } from './model/serie';
import { VentaService } from './service/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  multi: any[];
  view: any[] = [800, 600];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Compradores';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Total';
  legendTitle: string = 'COMPRADORES';

  colorScheme = {
    domain: ['#C7B42C', '#AAAAAA']
  };

  viewt: any[] = [400, 200];
  colorSchemet = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  value: number = 0;
  previousValue: number = 70;
  units: string = '$';

  ventas: Venta[];	 
  listaBarData: BarData[];
  constructor(private ventaService:VentaService) {
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
      var total = this.ventaService.totalVentas(this.ventas);
      this.value = total.total;
      this.units = total.cadena;
      var listaBarData = this.ventaService.convertirSerie(this.ventas);
      console.log(listaBarData);
      Object.assign(this, {listaBarData});
    });
  }
}