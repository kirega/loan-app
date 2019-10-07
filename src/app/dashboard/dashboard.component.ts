import {Component, OnInit} from '@angular/core';
import {LoansService} from '../services/loans.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  portfolio;
  outstanding;
  overdue;
  loans;
  data;
  labels;
  isLoading = true;
  key = 'loan_amount';
  title = 'Loan Portfolio: Summary of All loans Awarded';

  constructor(private loansService: LoansService) {
  }

  ngOnInit() {
    this.loansService.getLoans().subscribe((res: any) => {
      this.isLoading = false;
      this.portfolio = res.portfolio;
      this.outstanding = res.outstanding;
      this.overdue = res.overdue;
      this.loans = res.loans;
      this.data = this.mapData(this.loans, 'loan_amount', false);
      this.labels = this.mapData(this.loans, 'first_name', true);
    });
  }

  selectReport(event) {
    console.log(event);
    this.key = event.data;
    // this.isLoading = true;
    this.data = this.mapData(this.loans, this.key, false);
    this.labels = this.mapData(this.loans, event.label, true);
    this.title = event.title;
    // this.isLoading = false;
  }

  mapData(data, key, addComma) {
    return addComma
      ? data.map((data) => data[key].toLocaleString())
      : data.map((data) => data[key]);
  }

}
