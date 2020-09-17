import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViveiroDTO } from 'app/modules/public/models/interface/viveiro-dto.model';

@Component({
  selector: 'app-viveiro',
  templateUrl: './viveiro.component.html',
  styleUrls: ['./viveiro.component.scss']
})
export class ViveiroComponent implements OnInit {
  public viveiros: ViveiroDTO[];
  public viveiro: ViveiroDTO;
  flag = true;
  constructor(private activatedRoute: ActivatedRoute) {
    this.viveiros = [
      {
        id: 1,
        tamanho: 1500,
        ipCamera: 'http://208.72.70.171:80/mjpg/video.mjpg',
        densidade: 70000,
        latitude: '',
        longitude: '',
        laboratorio: 'AquaTec',
        proprietario: 'Erica',
        dataInicioCiclo: '15/08/2020'
      },
      {
        id: 2,
        tamanho: 1100,
        ipCamera: 'http://208.72.70.171:80/mjpg/video.mjpg',
        densidade: 50000,
        latitude: '',
        longitude: '',
        laboratorio: 'AquaTec',
        proprietario: 'Dudu',
        dataInicioCiclo: '15/08/2020'
      },
      {
        id: 3,
        tamanho: 1700,
        ipCamera: 'http://208.72.70.171:80/mjpg/video.mjpg',
        densidade: 80000,
        latitude: '',
        longitude: '',
        laboratorio: 'AquaTec',
        proprietario: 'Edinho',
        dataInicioCiclo: '15/08/2020'
      },
      {
        id: 4,
        tamanho: 2200,
        ipCamera: 'http://208.72.70.171:80/mjpg/video.mjpg',
        densidade: 100000,
        latitude: '',
        longitude: '',
        laboratorio: 'AquaTec',
        proprietario: 'Eraldo',
        dataInicioCiclo: '15/08/2020'
      }]
  }


  ngOnInit(): void {
    this.viveiro = this.activatedRoute.snapshot.params.id;

  }

}
