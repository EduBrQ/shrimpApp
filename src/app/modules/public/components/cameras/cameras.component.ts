import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  viveiroID: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.viveiroID = this.activatedRoute.snapshot.parent.params.id;
  }

}
