import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AeradorDTO } from '../../models/interface/aerador-dto.model';

@Component({
  selector: 'app-aeradores',
  templateUrl: './aeradores.component.html',
  styleUrls: ['./aeradores.component.scss']
})
export class AeradoresComponent implements OnInit {

  public aeradores: AeradorDTO[];
  public loading: boolean;
  viveiroID: any;

  constructor(private activatedRoute: ActivatedRoute) {

    this.aeradores = [];
    this.aeradores.push(
      {
        nome: 'Aerador - 1',
        status: false
      },
      {
        nome: 'Aerador - 2',
        status: true
      },
      {
        nome: 'Aerador - 3',
        status: false
      }
    );
  }

  ngOnInit(): void {
    this.viveiroID = this.activatedRoute.snapshot.parent.params.id;
  }

  adicionarAerador() {
    const id = this.aeradores.length + 1;
    this.aeradores.push({
      nome: `Aerador - ${id}`,
      status: false
    });
  }

}
