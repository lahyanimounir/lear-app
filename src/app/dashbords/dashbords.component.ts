import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashbords',
  templateUrl: './dashbords.component.html',
  styleUrls: ['./dashbords.component.css']
})
export class DashbordsComponent implements OnInit {
recordsFilter;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  	this.getDataFilter();

  	  	          	          var stackedBar = new Chart('ippm', {
    type: 'line',
    data: {
    	labels: ["44",
					"0",
					"6",
					"22",
					"10",
					"13",
					"40"],
			datasets: [{
				label: 'IPPM',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: [
					44,
					0,
					6,
					22,
					10,
					13,
					40
				],
			}
			
    ]}
});
  }
   getDataFilter() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/project/read.php')
      .subscribe(
        (response :any) => {
         
          this.recordsFilter=response.records;
          console.log(this.recordsFilter)
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
}
