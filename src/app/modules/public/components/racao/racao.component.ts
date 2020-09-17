import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-racao',
  templateUrl: './racao.component.html',
  styleUrls: ['./racao.component.scss']
})
export class RacaoComponent implements OnInit {
  viveiroID: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.viveiroID = this.activatedRoute.snapshot.parent.params.id;
  }

}
