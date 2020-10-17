import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VentaFecha } from '../model/venta-fecha';
import { BarData, Series } from '../model/serie';

@Injectable()
export class VentaFechaService {

  private usersUrl: string;
	 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://192.168.1.20:5800/ventas-fechas/rucs';
  }
 
  public findAll(): Observable<VentaFecha[]> {
    return this.http.get<VentaFecha[]>(this.usersUrl);
  }

  public buscarVenta(): Observable<VentaFecha[]> {
    return this.http.get<VentaFecha[]>(this.usersUrl+"/"+"1790691810001");

  }  
 
  public save(Venta: VentaFecha) {
    return this.http.post<VentaFecha>(this.usersUrl, Venta);
  }

  public convertirSerie(listaVentas:VentaFecha[]){
    var listaBarData:BarData[]=[];
    for(let ventaFecha of listaVentas){      
      var serie:Series = new Series();       
      serie.name = ventaFecha["awards_date"];
      serie.value = ventaFecha.total_venta ;
      if (listaBarData.some(e => e.name === ventaFecha["buyer.name"])) {
        var barData = listaBarData.find(e => e.name === ventaFecha["buyer.name"]);        
        barData.series.push(serie);
      }else{
        var barData = new BarData();
        barData.name = ventaFecha["buyer.name"];
        barData.series =[];
        barData.series.push(serie);
        listaBarData.push(barData);
      }    
    }
    console.log(listaBarData);
    return listaBarData;
  } 


}