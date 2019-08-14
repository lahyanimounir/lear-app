import { Component, OnInit } from '@angular/core';

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
    	labels: [44,
					0,
					6,
					22,
					10,
					13,
					40],
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
			
    },
    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Seconds'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Number Of Errors'
							}
						}]
					}
				}
});


  	          	          var stackedBar = new Chart('testedHarness', {
    type: 'line',
    data: {
    	labels: [44,
					0,
					6,
					22,
					10,
					13,
					40],
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
			
    },
    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Seconds'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Number Of Errors'
							}
						}]
					}
				}
});
  }

}
