import { Component, OnInit } from '@angular/core';
import { Empresa } from './model/empresa';
import { EmpresaService } from './service/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresas: Empresa[];	 
  empresa:Empresa;
  constructor(private userService: EmpresaService) {
  }
 
  ngOnInit() {
    this.userService.buscarEmpresa().subscribe(data => {
      this.empresas = data;
      this.empresa = this.empresas[0];
    });
    
  }
}



