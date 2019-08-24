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
family ='';
plant = '';
project = '';
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

objectKey(obj) {
    return Object.keys(obj);
  }

  formatedCerts(data,elem) {

  	if(elem == 'plant'){
      return data.reduce((prev, now) => {
        if (!prev[now.plant]) {
          prev[now.plant] = [];
        }

        prev[now.plant].push(now);
        return prev;
      }, {});
    }else if(elem == 'project'){
      return data.reduce((prev, now) => {
        if (!prev[now.project]) {
          prev[now.project] = [];
        }

        prev[now.project].push(now);
        return prev;
      }, {});
    }else if(elem == 'famille'){
      return data.reduce((prev, now) => {
        if (!prev[now.famille]) {
          prev[now.famille] = [];
        }

        prev[now.famille].push(now);
        return prev;
      }, {});
    }
    /*
       Now your data : { "1050 AJ": [ .... ], "X332.0 AC": [...], ... }
    */

  }
}
