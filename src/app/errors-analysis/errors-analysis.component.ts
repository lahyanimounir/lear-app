import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-errors-analysis',
  templateUrl: './errors-analysis.component.html',
  styleUrls: ['./errors-analysis.component.css']
})
export class ErrorsAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  	          var stackedBar = new Chart('totalErreors', {
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
				label: 'line 1',
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
			},{
				label: 'line 3',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: [50,
					30,
					16,
					2,
					12,
					15,
					10],
			},
			
    ]}
});


  	          	          var stackedBar = new Chart('testedHarness', {
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
				label: 'line 1',
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
			},{
				label: 'line 3',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: [50,
					30,
					16,
					2,
					12,
					15,
					10],
			},
			
    ]}
});


  	          	                    var stackedBar = new Chart('electicaltestEroor', {
    type: 'bar',
    data: {
    	labels: ["44",
					"0",
					"6",
					"22",
					"10",
					"13",
					"40"],
			datasets: [{
				label: 'errors',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: [50,
					30,
					16,
					2,
					12,
					15,
					10],
			},
			// {
			// 	label: 'line 2',
			// 	backgroundColor: '#72d78efa',
			// 	borderColor: '#72d78efa',
			// 	fill: false,
			// 	type: 'line',
			// 	data: this.solvingTimeByCounterpart.co,
			// },
			{
				type:"line",
				label: 'Cumulative',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: [50,
					30,
					16,
					2,
					12,
					15,
					10],
			}
			]
    },
    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Electical test Errors'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Errors'
							}
						}]
					}
				}
});
  }

}
