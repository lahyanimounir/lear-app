import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-time-analys',
  templateUrl: './time-analys.component.html',
  styleUrls: ['./time-analys.component.css']
})
export class TimeAnalysComponent implements OnInit {

chartNG;
errors = {days : [],totals : []};
avgErrorType = {Moy : [],Type : []};
errorSolvingTime = {total : [],TimeU : []};
solvingTimeByCounterpart = {counterparts : [],count : [],percent : []};
solvingTimeByWire = {wires : [],count : [],percent : []};
solvingTimeByCPV = {connectors : [],count : [],percent : []};
  constructor(private httpClient: HttpClient) { }

  //.get<any[]>('http://localhost/industriel/api/error/read.php')
getData() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/error/read.php')
      .subscribe(
        (response :any) => {
        	
          for(let i = 0;i<response.records.length;i++){
          	this.errors.days.push(response.records[i].date);
          	this.errors.totals.push(response.records[i].total);
          }

          for(let i = 0;i<response.avgTimeError.length;i++){
          	this.avgErrorType.Moy.push(response.avgTimeError[i].Moy);
          	this.avgErrorType.Type.push(response.avgTimeError[i].Type);
          }

          response.errorSolvingTime.sort((a, b) => (Number(a.total) > Number(b.total)) ? -1 : 1)

          for(let i = 0;i<response.errorSolvingTime.length;i++){
          	this.errorSolvingTime.total.push(response.errorSolvingTime[i].total);
          	this.errorSolvingTime.TimeU.push(response.errorSolvingTime[i].TimeU);
          }

          for(let i = 0;i<response.solvingTimeByCounterpart.length;i++){
          	this.solvingTimeByCounterpart.counterparts.push(response.solvingTimeByCounterpart[i].counterpart);
          	this.solvingTimeByCounterpart.count.push(response.solvingTimeByCounterpart[i].total);
          }
          let sum = this.solvingTimeByCounterpart.count.reduce(function(a,b){
			    return Number(a) + Number(b)
			  }, 0);
          for(let i = 0;i<response.solvingTimeByCounterpart.length;i++){
          	let calc : any= response.solvingTimeByCounterpart[i].total*100/sum;
          	calc = calc.toFixed(2);
          	this.solvingTimeByCounterpart.percent.push(calc);
          }

          for(let i = 0;i<response.solvingTimeByWire.length;i++){
          	this.solvingTimeByWire.wires.push(response.solvingTimeByWire[i].wire);
          	this.solvingTimeByWire.count.push(response.solvingTimeByWire[i].total);
          }
          let sumWire = this.solvingTimeByWire.count.reduce(function(a,b){
			    return Number(a) + Number(b)
			  }, 0);
          for(let i = 0;i<response.solvingTimeByWire.length;i++){
          	let calc : any= response.solvingTimeByWire[i].total*100/sumWire;
          	calc = calc.toFixed(2);
          	this.solvingTimeByWire.percent.push(Number(calc));
          }


          for(let i = 0;i<response.solvingTimeByCPV.length;i++){
          	this.solvingTimeByCPV.connectors.push(response.solvingTimeByCPV[i].CPV);
          	this.solvingTimeByCPV.count.push(response.solvingTimeByCPV[i].total);
          }
          let sumCPV = this.solvingTimeByCPV.count.reduce(function(a,b){
			    return Number(a) + Number(b)
			  }, 0);
          for(let i = 0;i<response.solvingTimeByCPV.length;i++){
          	let calc : any= response.solvingTimeByCPV[i].total*100/sumCPV;
          	calc = calc.toFixed(2);
          	this.solvingTimeByCPV.percent.push(Number(calc));
          }



          var connectors = new Chart('connectors', {
    type: 'bar',
    data: {
    	labels: this.solvingTimeByCPV.connectors,
			datasets: [{
				label: 'line 1',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.solvingTimeByCPV.percent,
				type : 'line'
			},
			{
				label: 'line 3',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: this.solvingTimeByCPV.count,
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



          var wires = new Chart('wires', {
    type: 'bar',
    data: {
    	labels: this.solvingTimeByWire.wires,
			datasets: [{
				label: 'line 1',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.solvingTimeByWire.percent,
				type : 'line'
			},
			// {
			// 	label: 'line 2',
			// 	backgroundColor: '#72d78efa',
			// 	borderColor: '#72d78efa',
			// 	fill: false,
			// 	type: 'line',
			// 	data: [
			// 		44,
			// 		0,
			// 		6,
			// 		22,
			// 		10,
			// 		13,
			// 		40
			// 	],
			// },
			{
				label: 'line 3',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: this.solvingTimeByWire.count,
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



          var stackedBar = new Chart('counterparts', {
    type: 'bar',
    data: {
    	labels: this.solvingTimeByCounterpart.counterparts,
			datasets: [{
				label: 'line 1',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.solvingTimeByCounterpart.percent,
				type : 'line'
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
				label: 'line 3',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: this.solvingTimeByCounterpart.count,
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



          var stackedBar = new Chart('erreurSolvingByTime', {
    type: 'bar',
    data: {
    	labels: this.errorSolvingTime.TimeU,
			datasets: [{
				label: 'Error Solving Time',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.errorSolvingTime.total,
			}]
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


          var stackedBar = new Chart('ctx', {
    type: 'bar',
    data: {
    	labels: this.avgErrorType.Type,
			datasets: [{
				label: 'Avrg Error Time / error type',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.avgErrorType.Moy,
			}]
    },    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Error Type'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Solving Time(s)'
							}
						}]
					}
				}
});

          this.chartNG = new Chart('avgerrurTime', 
   {
		type: 'line',
		data: {
			labels: this.errors.days,
			datasets: [{
				label: 'Total test time',
				backgroundColor: '#f1f1f1',
				borderColor: '#009efb',
				fill: false,
				data: this.errors.totals,
			}]
		},    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'days'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Minutes'
							}
						}]
					}
				}
	});


        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


  ngOnInit() {

  	this.getData();

  
  }

}


