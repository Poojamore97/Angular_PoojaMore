import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: any
  setSelectedCategoryBgColor: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data.json').subscribe(response => {
      this.dashboardData = response;
      console.log(this.dashboardData)
    })
  }

  ngOnInit() {
  }
  selectCategory(data) {
    this.dashboardData.forEach(element => {
      element.category.filter(category => {
        if (category.name === data.name) {
          this.setSelectedCategoryBgColor = true;
        } else {
          this.setSelectedCategoryBgColor = false
        }
      })
    });

    console.log(data)
  }

}
