import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashbords',
  templateUrl: './dashbords.component.html',
  styleUrls: ['./dashbords.component.css']
})
export class DashbordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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

}
