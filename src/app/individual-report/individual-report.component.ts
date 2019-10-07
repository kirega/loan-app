import { Component, OnInit } from '@angular/core';
import {LoansService} from '../services/loans.service';

@Component({
  selector: 'app-individual-report',
  templateUrl: './individual-report.component.html',
  styleUrls: ['./individual-report.component.css']
})
export class IndividualReportComponent implements OnInit {
  isGettingDetails = true;
  officerLoan;
  officers;
  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.loansService.getOfficer().subscribe((res: any) => {
      this.isGettingDetails = false;
      this.officers = res;
    });
  }
  selectedOfficer(id: number) {
    this.isGettingDetails = true;
    this.loansService.getOfficerLoans(id).subscribe((res: any) => {
      this.isGettingDetails = false;
      this.officerLoan = res[0];
    });
  }

}
