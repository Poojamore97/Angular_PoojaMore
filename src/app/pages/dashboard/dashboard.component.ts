import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  listData: any;
  selectedCategory: any;
  preferredBase: any;
  preferredType: any;
  setSelectedCategoryBgColor: any;
  sliderValue: any;
  filterObject: any;

  constructor(private http: HttpClient) {
    this.getFilterData();
    this.getListData();
  }

  getFilterData() {
    this.http.get('assets/data.json').subscribe(response => {
      this.dashboardData = response;
      console.log(this.dashboardData);
    });
  }

  getListData() {
    this.http.get('assets/dummyObj.json').subscribe(response => {
      this.listData = response;
      console.log(this.listData);
    })
  }
  search() {
    this.filterObject = {
      preferredBase: this.preferredBase,
      preferredType: this.preferredType,
      amount: this.sliderValue,
      type: this.selectedCategory
    }
  }

  ngOnInit() {
  }
  selectCategory(data) {
    this.selectedCategory = data.name
    this.dashboardData.forEach(element => {
      element.category.forEach(category => {
        if (category.name === data.name) {
          category.selected = true;
        } else {
          category.selected = false;
        }
      });
    });

    console.log(data)
  }

}
