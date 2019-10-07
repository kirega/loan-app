import { Component, OnInit } from '@angular/core';
import {LoansService} from '../services/loans.service';

@Component({
  selector: 'app-loan-officer',
  templateUrl: './loan-officer.component.html',
  styleUrls: ['./loan-officer.component.css']
})
export class LoanOfficerComponent implements OnInit {
  officers: any;
  officerLoan: any;
  isGettingLoans = true;
  isGettingDetails = true;
  loans;
  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.loansService.getAllOfficerLoans().subscribe((res:any) => {
      this.loans = res;
      this.isGettingLoans = false;
    });
  }

  mapData(data, key, addComma) {
    return addComma
      ? data.map((data) => data[key].toLocaleString())
      : data.map((data) => data[key]);
  }
}
