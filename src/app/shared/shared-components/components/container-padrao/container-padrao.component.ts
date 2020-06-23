import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-padrao',
  templateUrl: './container-padrao.component.html',
  styleUrls: ['./container-padrao.component.css']
})
export class ContainerPadraoComponent implements OnInit {

  @Input() title: string;
  @Input() mb = 'mb-4';

  constructor() { }

  ngOnInit() {
  }

}
