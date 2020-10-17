import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../model/empresa';
@Injectable()
export class EmpresaService {

  private usersUrl: string;
	 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://192.168.1.20:5000/rucs';
  }
 
  public findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.usersUrl);
  }

  public buscarEmpresa(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.usersUrl+"/"+"100092519001");
  }
 
  public save(empresa: Empresa) {
    return this.http.post<Empresa>(this.usersUrl, empresa);
  }

}