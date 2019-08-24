// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-production-report',
//   templateUrl: './production-report.component.html',
//   styleUrls: ['./production-report.component.css']
// })
// export class ProductionReportComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-production-report',
  templateUrl: './production-report.component.html',
  styleUrls: ['./production-report.component.css']
})
export class ProductionReportComponent implements OnInit {
chartProduction;
chartNG;
tests;
dtOptions;
acceptHarness;
rejectHarness;
avgAcceptHarness;
avgRejectHarness;
percentagAccept;
percentagReject;
recordsFilter;

family ='';
plant = '';
project = '';
line = '';
 
  constructor(private httpClient: HttpClient) { }
 /*    options: {
            legend: {
              display: false
              
              
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }*/
  ngOnInit() {

  	this.getData();
    this.getDataFilter();
  	this.chartProduction = new Chart('Production', {
          type: 'doughnut',
          data: {
            labels: ['Production'],
            datasets: [
              { 
                data: [500,2000],
                borderColor: "#3cba9f",
                backgroundColor:['#3cba9f','#f1f1f1'],
                fill: false
              }
            ]
          },
           options: {
              rotation: 1 * Math.PI,
              circumference: 1 * Math.PI
          }
     
        });

  	 	this.chartNG = new Chart('NG', {
          type: 'doughnut',
          data: {
            labels: ['NG'],
            datasets: [
              { 
                data: [100,2000],
                borderColor: "#ff0000",
                backgroundColor:['#ff0000'],
                fill: false
              }
            ]
          },
           options: {
              rotation: 1 * Math.PI,
              circumference: 1 * Math.PI
          }
     
        });

  }

  calcTime(t){
    let time = t.split('.');
          let s :any= (Number(t) - Number(time[0]))*60;
          s = s+'';
          let sec = s.split('.');
          console.log(s);
    return time[0]+' min '+ sec[0]+' s';
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
//.get<any[]>('http://api.sunrise-pro.com/test/read.php')
    getData() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/test/read.php?s='+this.line)
      .subscribe(
        (response :any) => {
        	console.log(response)
        	this.dtOptions = { pagingType: 'full_numbers', pageLength: 5, processing: true };
          this.tests = response.records;
          this.acceptHarness = response.nbrAccept[0];
          this.rejectHarness = response.nbrReject[0];
          let total = Number(this.acceptHarness) + Number(this.rejectHarness);
          this.percentagAccept = Number(this.acceptHarness)*100 / total;
          this.percentagReject = Number(this.rejectHarness)*100 / total;
          this.avgAcceptHarness = this.calcTime(response.avgAccept[0]);
          this.avgRejectHarness = this.calcTime(response.avgReject[0]);

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


search() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/test/read.php?s='+this.line)
      .subscribe(
        (response :any) => {
          console.log(response)
          this.dtOptions = { pagingType: 'full_numbers', pageLength: 5, processing: true };
          this.tests = response.records;
          this.acceptHarness = response.nbrAccept[0];
          this.rejectHarness = response.nbrReject[0];
          let total = Number(this.acceptHarness) + Number(this.rejectHarness);
          this.percentagAccept = Number(this.acceptHarness)*100 / total;
          this.percentagReject = Number(this.rejectHarness)*100 / total;
          this.avgAcceptHarness = this.calcTime(response.avgAccept[0]);
          this.avgRejectHarness = this.calcTime(response.avgReject[0]);

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
