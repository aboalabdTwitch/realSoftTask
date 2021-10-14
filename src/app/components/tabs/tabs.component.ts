import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  modelFlag=true;
  listFlag=false;


  constructor(private data:DataService) { 

  }

  ngOnInit(): void {

    this.filteredData=this.data.getData(this.type);
    


  }

  typeOfSurvey(type:any){
    console.log(type,'this is in typeOfSurvey func')

    this.data.preSelcetedCard='';
    this.data.slectedCard='',
    this.type=type.tab.textLabel;
    this.dashboardFlag=true;
    this.type=type.tab.textLabel;
    this.filteredData=this.data.getData(type.tab.textLabel);
  }

  onTyping(){
    if (this.serchKey=='') {
      this.filteredData=[]
      this.filteredData=this.data.getData('');
    }else {
    this.filteredData=[];
    this.filteredData=this.data.searchByName(this.serchKey,this.type);
    }



  }


  oncheck(){
    
   
  }

  searchByDate(){
  
    if (this.startDateFiltered==''&&this.endDateFiltered=='') {
      this.filteredData=[];
      this.filteredData=this.data.getData(this.type);
    }else {
    this.filteredData=[];
    this.filteredData=this.data.searchByDate(this.convertDate(),this.convertedEnd(),this.type);
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
    this.startDateFiltered='';
    this.endDateFiltered='';
    this.filteredData=this.data.getData(this.type);
  }

  filterButton(){
    this.filterButtonFlag=!this.filterButtonFlag;
  }

  clicked(){
    this.dashboardFlag=false;



  }

  viewChangeOnClick(type:string){
  
    if (type=='list') {
      if (this.listFlag==false) {
        this.listFlag=!this.listFlag;
        this.modelFlag=!this.modelFlag;
      }
    }else{
      if (this.modelFlag==false) {
        this.listFlag=!this.listFlag;
        this.modelFlag=!this.modelFlag;
      }
    }
  }
 

}



