import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @Input() data;
  @Input() labels;
  @Input() title;
  @Input() type = 'bar';
  options;
  chart: any;
  @ViewChild('loanChart', {static: true}) portfolioChart: ElementRef;

  constructor(private cd: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    const bg = this.generateBg(this.data);
    this.options = {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Amount',
          backgroundColor: bg,
          data: this.data
        }]
      },
      options: {
        layout: {
          padding: 20
        },
        legend: {
          display: true,
          labels: {
            fontSize: 14
          },
          position: 'right'
        },
        title: {
          display: true,
          text: this.title
        }
      }
    };
    const ctx = this.portfolioChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, this.options);
  }
  generateBg(data) {
    const graphColors = [];
    let i = 0;
    while (i <= data.length) {
      const randomR = Math.floor((Math.random() * 130) + 100);
      const randomG = Math.floor((Math.random() * 130) + 100);
      const randomB = Math.floor((Math.random() * 130) + 100);
      const graphBackground = 'rgb('
        + randomR + ', '
        + randomG + ', '
        + randomB + ')';
      graphColors.push(graphBackground);
      i++;
    }
    return graphColors;
  }


}
