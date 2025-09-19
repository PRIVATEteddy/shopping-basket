
import { Component } from '@angular/core';
import {  ChartsService } from './charts';
@Component({
  selector: 'app-chart-product',
  imports: [],
  templateUrl: './chart-product.html',
  styleUrl: './chart-product.scss'
})
export class ChartProduct {

  public Chart: any;
  private Charts: any;
  private labeldata: any[] = [];
  private productdata: any[] = [];
  private pricedata: any[] = [];

  constructor(public service: ChartsService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((response) => {
      this.Charts = response;
if (this.Charts != null) {
  for (let i = 0; i < this.Charts.length; i++) {
    this.labeldata.push(this.Charts[i].name);
    this.productdata.push(this.Charts[i].stock);
    this.pricedata.push(this.Charts[i].price);
}
this.createChart(this.labeldata, this.productdata, this.pricedata);
}
});
  }
  createChart(labeldata: any, productdata: any, pricedata: any) {}
}
