import { Component, OnInit } from '@angular/core';
import employeeDetails from '../../data/sample_data.json';

@Component({
  selector: 'app-ng-datatable-component',
  templateUrl: './ng-datatable-component.component.html',
  styleUrls: ['./ng-datatable-component.component.css']
})
export class NgDatatableComponentComponent implements OnInit {
  employees: object[];
  columns = ["name", "phone", "email", "company", "date_entry", "org_num", "address_1", "city", "zip", "geo", "status", "fee", "url", "date_first", "date_recent"];
  paginated_employees;
  pages;
  selected;
  page = {
    number: 0,
    size: 10
  };
  constructor() { }

  ngOnInit() {
    this.employees = employeeDetails;
    this.setUpPagination()
  }

  setUpPagination() {
    this.pages = Math.round(this.employees.length/this.page.size);
    const start = this.page.number * this.page.size;
    this.paginated_employees = this.employees.slice(start, start + this.page.size);
    this.selected = this.page.number;
  }

  showPageData(pageNumber) {
    this.page.number = JSON.parse(pageNumber);
    this.setUpPagination();
  }

  updateTable() {
    this.page.number = 0;
    this.setUpPagination();
  }

  onSubmit(id, status) {
    console.log(id, status);
  }

}