import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  filteredData!:any[];
  type:string='Published';

  selctedCardInfo!:any;

  serchKey:any='';

  startDateFiltered:any;
  endDateFiltered:any;

  filterButtonFlag=true;

  dashboardFlag=true;

  constructor(private data:DataService) { 

  }

  ngOnInit(): void {

    this.filteredData=this.data.getData();
    console.log('tabs im here ---------------------');


  }

  typeOfSurvey(type:any){
    this.dashboardFlag=true;
    this.type=type.tab.textLabel;
    this.data.setType(type.tab.textLabel);
    this.filteredData=this.data.getData();
  }

  onTyping(){
    if (this.serchKey=='') {
      this.filteredData=[]
      this.filteredData=this.data.getData();
    }else {
    this.filteredData=[];
    this.filteredData=this.data.searchByName(this.serchKey,this.type);
    }



  }


  oncheck(){
    
   
  }

  searchByDate(){
  
    if (this.startDateFiltered==''&&this.endDateFiltered=='') {
      this.filteredData=[]
      this.filteredData=this.data.getData();
    }else {
    this.filteredData=[];
    this.filteredData=this.data.searchByDate(this.convertDate(),this.convertedEnd());
    }
    
    


  }

  convertDate(){

    let start = Date.parse(this.startDateFiltered);
    var date = new Date(start);
    let month=date.getMonth()+1;
    let finalstart=date.getDate()+'/'+month+'/'+date.getFullYear();
    
    
    return finalstart.toString();
  }

  convertedEnd(){
    let end = Date.parse(this.endDateFiltered);
    var date = new Date(end);
    let monthEnd=date.getMonth()+1;
    let finalEnd=date.getDate()+'/'+monthEnd+'/'+date.getFullYear();
    
    return finalEnd.toString();
  }

  clear(){
    
    console.log(this.filteredData)
    this.startDateFiltered='';
    this.endDateFiltered='';
    this.filteredData=this.data.getData();
  }

  filterButton(){
    this.filterButtonFlag=!this.filterButtonFlag;
  }

  selctedCard(event:any){
    
    this.selctedCardInfo=event;
    this.dashboardFlag=false;

  }
 

}



