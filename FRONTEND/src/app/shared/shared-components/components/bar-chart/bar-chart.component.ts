import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartLayoutOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  @Input() fluxo: string;

  layout: ChartLayoutOptions = {
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 3.6
  };
  barChartLabels: Label[]
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[]

  ngOnInit(): void {
    if (this.fluxo === 'racao') {
      this.barChartData = [
        {
          data: [0, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 2,
            8, 8, 8, 8, 8, 10, 10, 10, 10, 10,
            12, 12, 12, 12, 15, 15, 15, 15, 15],
          label: 'Ração / Dia'
        }
      ];
      this.barChartLabels = ['05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020',
        '09/09/2020', '10/09/2020', '11/09/2020', '12/09/2020',
        '13/09/2020', '14/09/2020', '15/09/2020', '16/09/2020',
        '17/09/2020', '18/09/2020', '19/09/2020', '20/09/2020',
        '21/09/2020', '22/09/2020', '23/09/2020', '24/09/2020',
        '25/09/2020', '26/09/2020', '27/09/2020', '28/09/2020',
        '29/09/2020', '30/09/2020', '01/10/2020', '02/10/2020',
        '03/10/2020', '04/10/2020', '05/10/2020'];
    } else {
      this.barChartData = [
        {
          data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,
            5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
          label: 'grama / semana'
        }
      ];
      this.barChartLabels = ['01/09/2020', '08/09/2020', '15/09/2020', '22/09/2020',
        '28/09/2020', '05/10/2020', '12/10/2020', '19/10/2020',
        '26/10/2020', '03/10/2020', '10/10/2020', '17/10/2020',
        '24/10/2020', '01/11/2020', '08/11/2020', '15/11/2020',
        '22/11/2020', '29/11/2020', '06/12/2020'];
    }

  }

}
