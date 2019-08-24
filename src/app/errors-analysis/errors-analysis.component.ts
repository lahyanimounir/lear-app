import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-errors-analysis',
  templateUrl: './errors-analysis.component.html',
  styleUrls: ['./errors-analysis.component.css']
})
export class ErrorsAnalysisComponent implements OnInit {

  tabTypes = [0,1,7,8,9,10,11,12,19];
  days = [];
  totalErrorsType0 = [];
  totalErrorsType1 = [];
  totalErrorsType7 = [];
  totalErrorsType8 = [];
  totalErrorsType9 = [];
  totalErrorsType10 = [];
  totalErrorsType11 = [];
  totalErrorsType12 = [];
  totalErrorsType19 = [];
  nbrErrorsByType = {type: [],total: [],percentage : [],cum : []};
  moyErrorsByCable = {moy: [],calc: [],date : []};
  recordsFilter;
  constructor(private httpClient: HttpClient) { }
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
  	getNbrErrorsByType(data){
  		const sum = data
  					.map(item => item.total)
  					.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  		let cum = 0;
  		for(let i = 0;i<data.length;i++){
  			this.nbrErrorsByType.type.push(data[i].type);
  			this.nbrErrorsByType.total.push(data[i].total);
  			let calc :any= Number(data[i].total)*100/sum;
  			calc = calc.toFixed(2);
  			this.nbrErrorsByType.percentage.push(calc);
  			cum+=Number(calc);
  			this.nbrErrorsByType.cum.push(cum);
  		}

  		var stackedBar = new Chart('electicaltestEroor', {
    type: 'bar',
    data: {
    	labels: this.nbrErrorsByType.type,
			datasets: [{
				label: 'errors',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.nbrErrorsByType.total,
				yAxisID: 'B'
			},
			{
				type:"line",
				label: 'Cumulative',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: this.nbrErrorsByType.cum,
				yAxisID: 'A'
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
						yAxes: [
						{
        id: 'A',
        type: 'linear',
        position: 'right',
      }, {
        id: 'B',
        type: 'linear',
        position: 'left'
      }]
					}
				}
});

  	}

  	getTotalErrorsByTime(data){
  		//console.log(new Date(data[0].date));
  		let tabDateStart = data[0].date.split('-');
  		let tabDateEnd = data[data.length-1].date.split('-');
	  	let start = new Date(tabDateStart[0],tabDateStart[1] - 1,tabDateStart[2]);
	  	let end = new Date(tabDateEnd[0],tabDateEnd[1] - 1,tabDateEnd[2]);
	  	//console.log(start);
	  	
		for (var d = start; d.getTime() <= end.getTime(); d.setDate(d.getDate() + 1)) {
			let mounth = d.getMonth()+1;
		 		this.days.push(d.getFullYear()+'-'+mounth+'-'+d.getDate());
			for(let i=0;i<this.tabTypes.length;i++){	

		 	

		 		let existe = 0;
		 		let index = 0;
		 		for(let j=0;j<data.length;j++){
		 			let dateToCompare = new Date(data[j].date);

		 			if( (dateToCompare.getTime() - 3600 * 1000) == d.getTime() && data[j].type ==  this.tabTypes[i]){
		 				existe = 1;
		 				index = j;
		 			}
		 		}
		 		if(this.tabTypes[i] == 0){
		 			if(existe != 0){
			 			this.totalErrorsType0.push(data[index].total);
			 		}else{
			 			this.totalErrorsType0.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 1){
		 			if(existe != 0){
			 			this.totalErrorsType1.push(data[index].total);
			 		}else{
			 			this.totalErrorsType1.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 7){
		 			if(existe != 0){
			 			this.totalErrorsType7.push(data[index].total);
			 		}else{
			 			this.totalErrorsType7.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 8){
		 			if(existe != 0){
			 			this.totalErrorsType8.push(data[index].total);
			 		}else{
			 			this.totalErrorsType8.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 9){
		 			if(existe != 0){
			 			this.totalErrorsType9.push(data[index].total);
			 		}else{
			 			this.totalErrorsType9.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 10){
		 			if(existe != 0){
			 			this.totalErrorsType10.push(data[index].total);
			 		}else{
			 			this.totalErrorsType10.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 11){
		 			if(existe != 0){
			 			this.totalErrorsType11.push(data[index].total);
			 		}else{
			 			this.totalErrorsType11.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 12){
		 			if(existe != 0){
			 			this.totalErrorsType12.push(data[index].total);
			 		}else{
			 			this.totalErrorsType12.push(0);
			 		}
		 		}else if(this.tabTypes[i] == 19){
		 			if(existe != 0){
			 			this.totalErrorsType19.push(data[index].total);
			 		}else{
			 			this.totalErrorsType19.push(0);
			 		}
		 		}
		 		
		 	}   
		}
		var stackedBar = new Chart('totalErreors', {
    type: 'line',
    data: {
    	labels: this.days,
			datasets: [{
				label: 'Type 0',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.totalErrorsType0,
			},{
				label: 'Type 1',
				backgroundColor: '#009e00',
				borderColor: '#009e00',
				fill: false,
				data: this.totalErrorsType1,
			},{
				label: 'Type 7',
				backgroundColor: '#0043fb',
				borderColor: '#0043fb',
				fill: false,
				data: this.totalErrorsType7,
			},{
				label: 'Type 8',
				backgroundColor: '#899efb',
				borderColor: '#899efb',
				fill: false,
				data: this.totalErrorsType8,
			},{
				label: 'Type 9',
				backgroundColor: '#010efb',
				borderColor: '#010efb',
				fill: false,
				data: this.totalErrorsType9,
			},{
				label: 'Type 10',
				backgroundColor: '#009e54',
				borderColor: '#009e54',
				fill: false,
				data: this.totalErrorsType10,
			},{
				label: 'Type 11',
				backgroundColor: '#0000fb',
				borderColor: '#0000fb',
				fill: false,
				data: this.totalErrorsType11,
			},{
				label: 'Type 12',
				backgroundColor: '#044efb',
				borderColor: '#044efb',
				fill: false,
				data: this.totalErrorsType12,
			},{
				label: 'Type 19',
				backgroundColor: '#00333b',
				borderColor: '#00333b',
				fill: false,
				data: this.totalErrorsType19,
			}
			
    ]}
});
	}


	getMoyErrorsByCable(totalCable,totalErrors,moyCable){
		for(let i=0;i<totalCable.length;i++){
			this.moyErrorsByCable.date.push(totalCable[i].date);
			this.moyErrorsByCable.moy.push(moyCable[i].moy);
			let existe = 0;
			let index = 0;
			for(let j = 0;j<totalErrors.length;j++){
				if(totalErrors[j].date == totalCable[i].date){
					existe = 1;
					index = j;
				}
			}
			if(existe != 0){
				let calc : any= Number(totalErrors[index].total)/Number(totalCable[i].total);
				calc = calc.toFixed(2);
				this.moyErrorsByCable.calc.push(calc);
			}else{
				this.moyErrorsByCable.calc.push(0);
			}
		}
		var chartMoyCableErrors = new Chart('testedHarness', {
    type: 'line',
    data: {
    	labels: this.moyErrorsByCable.date,
			datasets: [{
				label: 'Error',
				backgroundColor: '#009efb',
				borderColor: '#009efb',
				fill: false,
				data: this.moyErrorsByCable.calc,
				yAxisID: 'B'
			},
			{
				type:"line",
				label: 'Tested Harness',
				backgroundColor: '#ff0000',
				borderColor: '#ff0000',
				fill: false,
				data: this.moyErrorsByCable.moy,
				yAxisID: 'A'
			}
			]
    },
    options: {
					responsive: true,
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: false,
								labelString: 'Error / tested harness'
							}
						}],
						yAxes: [
						{
        id: 'A',
        type: 'linear',
        position: 'right',
      }, {
        id: 'B',
        type: 'linear',
        position: 'left'
      }]
					}
				}
});
	}

//.get<any[]>('http://localhost/industriel/api/errorsAnalysis/read.php')
  getData() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/errorsAnalysis/read.php')
      .subscribe(
        (response :any) => {

        	this.getTotalErrorsByTime(response.totalErrorsByTime);
          	this.getNbrErrorsByType(response.nbrErrorsByType);
          	this.getMoyErrorsByCable(response.totalCableByDate,response.totalErrorsByDate,response.moyTimeTestByDate);

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

  ngOnInit() {
  	this.getDataFilter();
  	this.getData();
  	
  	          


//   	          	          var stackedBar = new Chart('testedHarness', {
//     type: 'line',
//     data: {
//     	labels: ["44",
// 					"0",
// 					"6",
// 					"22",
// 					"10",
// 					"13",
// 					"40"],
// 			datasets: [{
// 				label: 'line 1',
// 				backgroundColor: '#009efb',
// 				borderColor: '#009efb',
// 				fill: false,
// 				data: [
// 					44,
// 					0,
// 					6,
// 					22,
// 					10,
// 					13,
// 					40
// 				],
// 			},{
// 				label: 'line 3',
// 				backgroundColor: '#ff0000',
// 				borderColor: '#ff0000',
// 				fill: false,
// 				data: [50,
// 					30,
// 					16,
// 					2,
// 					12,
// 					15,
// 					10],
// 			},
			
//     ]}
// });


  	          	                    
  }

}
