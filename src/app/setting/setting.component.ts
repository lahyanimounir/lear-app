import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
tabs ="taktTime";
dtOptions;
product ={'id':'','plant':'','project':'','famille':'','line':''};
updateModal=false
records ;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getData();
  }
    getData() {
    this.httpClient
      .get<any[]>('http://api.sunrise-pro.com/project/read.php')
      .subscribe(
        (response :any) => {
         
          this.records=response.records;
          console.log(this.records)
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
  saveData(){
  	console.log(this.product)
  	this.httpClient
      .post('http://api.sunrise-pro.com/project/project.php',this.product)
      .subscribe()

      	}
  updateData(){
    console.log(this.product)
    this.httpClient
      .post('http://api.sunrise-pro.com/api/project/update.php',this.product)
      .subscribe((response :any) => {
         
         this.getData();
          console.log(response)
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        })
  }
  deletteData(records){
    this.httpClient
      .post('http://api.sunrise-pro.com/api/project/delette.php',records)
      .subscribe((response :any) => {
         
         this.getData();
          console.log(response)
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        })
  }
  updateProjet(record){
     this.product.id = record.id;
     this.product.plant =record.plant; 
     this.product.project =record.project; 
     this.product.famille =record.famille; 
     this.product.line =record.linee;
     this.updateModal = true; 
   }
}
