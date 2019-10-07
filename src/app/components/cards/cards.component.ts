import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() portfolio;
  @Input() overdue;
  @Input() outstanding;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  portfolioObj = {
    data: 'loan_amount',
    label: 'first_name',
    title: 'Loan Portfolio: Summary of All loans Awarded'
  };
  outstandingObj = {
    data: 'amount_due',
    label: 'first_name',
    title: 'Loans Outstanding: Summary of All loans Unpaid'
  };
  overdueObj = {
    data: 'overdue',
    label: 'first_name',
    title: 'Loans Overdue: Summary of All Loans At Risk'
  };

  constructor() {
  }

  ngOnInit() {
  }

  choose(type) {
    this.selected.emit(type);
  }

}
