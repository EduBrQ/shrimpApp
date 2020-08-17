import { Component, OnInit } from '@angular/core';
import { AeradorDTO } from '../../models/interface/aerador-dto.model';

@Component({
  selector: 'app-aeradores',
  templateUrl: './aeradores.component.html',
  styleUrls: ['./aeradores.component.scss']
})
export class AeradoresComponent implements OnInit {

  public aeradores: AeradorDTO[];
  public loading: boolean;

  constructor() {
    this.aeradores = [];
    this.aeradores.push(
      {
        nome: 'Aerador - 01',
        status: false
      },
      {
        nome: 'Aerador - 02',
        status: true
      },
      {
        nome: 'Aerador - 03',
        status: false
      }
    );
  }

  ngOnInit(): void {
  }


}
