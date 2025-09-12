import { Component } from '@angular/core';
import { ChartsService  } from './chart';
@Component({
  selector: 'app-scatter-chart',
  imports: [],
  templateUrl: './chart-base.html',
  styleUrl: './chart-base.scss'
})
export class ChartBaseComponent {

  public chart: any;
  private chartInfo: any;
    private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];

  constructor(public service: ChartsService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((response) => {
      this.chartInfo = response;
      if (this.chartInfo != null) {
        for (let i = 0; i < this.chartInfo.length; i++) {
          this.labeldata.push(this.chartInfo[i].year);
          this.realdata.push(this.chartInfo[i].amount);
          this.colordata.push(this.chartInfo[i].colorcode);
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  createChart(labeldata: any, realdata: any, colordata: any) {}
}

