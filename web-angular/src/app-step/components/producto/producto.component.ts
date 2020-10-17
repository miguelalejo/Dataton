import { Component, NgModule, OnInit } from '@angular/core';
import { multi } from './data';
import { Producto } from './model/producto';
import { BarData } from './model/serie';
import { ProductoService } from './service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  multi: any[];
  view: any[] = [1000, 600];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Productos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Cantidad';
  legendTitle: string = 'COMPRADORES';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  productos: Producto[];	 
  listaBarData: BarData[];
  constructor(private productoService:ProductoService) {
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
    this.productoService.buscarProducto().subscribe(data => {
      this.productos = data;
      var listaBarData = this.productoService.convertirSerie(this.productos);
      console.log(listaBarData);
      Object.assign(this, {listaBarData});
    });
  }
}