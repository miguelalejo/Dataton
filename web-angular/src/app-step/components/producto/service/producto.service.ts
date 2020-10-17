import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../model/producto';
import { BarData, Series } from '../model/serie';

@Injectable()
export class ProductoService {

  private usersUrl: string;
	 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://192.168.1.20:5200/productos/rucs';
  }
 
  public findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.usersUrl);
  }

  public buscarProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.usersUrl+"/"+"0102078011001");
  }  
 
  public save(Producto: Producto) {
    return this.http.post<Producto>(this.usersUrl, Producto);
  }

  public convertirSerie(listaProductos:Producto[]){
    var listaBarData:BarData[]=[];
    for(let producto of listaProductos){      
      var serie:Series = new Series();       
      serie.name = producto["buyer.name"];
      serie.value = producto.total_productos ;
      if (listaBarData.some(e => e.name === producto.contracts_items_description)) {
        var barData = listaBarData.find(e => e.name === producto.contracts_items_description);        
        barData.series.push(serie);
      }else{
        var barData = new BarData();
        barData.name = producto.contracts_items_description;
        barData.series = [];
        barData.series.push(serie);
        listaBarData.push(barData);
      }    
    }
    console.log(listaBarData);
    return listaBarData;
  } 

}