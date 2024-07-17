import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs';
import { NPSService } from 'src/app/api/nps.services';
import { Calificacion, NPS } from 'src/app/api/Interfases/Calificaciones'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ToolbarComponent } from "../toolbar/toolbar.component";



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule, ToolbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  displayedColumns: string[] = ['usuarioID', 'calificacion','fechaCalificacion'];
  dataSource = new MatTableDataSource<Calificacion>([]);
  dataNPS: NPS[] = [];
  progressValue = 0
  fechaCalculo = ""

  constructor(private servenps: NPSService){

  }
  ngOnInit(): void {
     this.servenps.getCalificaciones().subscribe(data =>{
      this.dataSource.data = data;
      
    })
    this.servenps.getresultadosNPS().subscribe(data =>{
      this.dataNPS = data;
      this.progressValue =  this.dataNPS[0].nps
      this.fechaCalculo = this.dataNPS[0].fechaCalculo
      
    })
    
    
  }


}
