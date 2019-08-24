import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  
  transform(areaList : any, areaname: any,param : any): any[] {


       if (areaname === undefined ||  areaname == null || areaname.length == 0) {
       return areaList;
   }

       if (areaList.length != 0 ) {
       	
           //return areaList.domaines.filter(item => areaname.some(f => f == item));
           return areaList.filter(item => item[param] == areaname);
           });
       }
   }


