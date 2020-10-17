import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venta } from '../model/venta';
import { BarData, Series } from '../model/serie';

@Injectable()
export class VentaService {

  private usersUrl: string;
	 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://192.168.1.20:5400/ventas/rucs';
  }
 
  public findAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.usersUrl);
  }

  public buscarVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.usersUrl+"/"+"0102078011001");
  }  
 
  public save(Venta: Venta) {
    return this.http.post<Venta>(this.usersUrl, Venta);
  }

  public convertirSerie(listaVentas:Venta[]){   
    var listaBarData:BarData[]=[];
    for(let venta of listaVentas){      
      var serie:Series = new Series();       
      serie.name = venta["buyer.name"];
      serie.value = venta.total_venta ;
      var barData = new BarData();
      barData.name = venta["buyer.name"];
      barData.series = [];
      barData.series.push(serie);
      listaBarData.push(barData);      
    }
    console.log(listaBarData);
    return listaBarData;
  } 

  public totalVentas(listaVentas:Venta[]){   
    var sumaTotal = 0;
    for(let venta of listaVentas){      
      sumaTotal+= venta.total_venta;
    }
    var cadena ="DOLARES";
    var intvalue = Math.trunc( sumaTotal );
    if(intvalue.toString().length>6)
    {
      cadena = "$MILLONES"
      sumaTotal = intvalue;
    }
    return {"total":sumaTotal,"cadena":cadena};
  } 

}