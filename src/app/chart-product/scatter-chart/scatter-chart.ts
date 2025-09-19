import { product } from './../../datamodel/admin.interface';
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartProduct } from '../chart-product';
import { ChartsService } from '../charts';
ChartsService
@Component({
  selector: 'app-scatter-chart',
  imports: [],
  templateUrl: './scatter-chart.html',
  styleUrl: './scatter-chart.scss'
})
export class ScatterChart  extends ChartProduct {

  public constructor(public override service: ChartsService) {
    super(service);
  }

  override createChart(labeldata: any, productdata: any, pricedata: any) {
    this.Chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {

            label: 'No. of stock',
            data: productdata,
            barThickness: 40,

          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
}
