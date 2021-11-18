import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/shared/users';
import { Surveys } from './model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  filteredData:any=[];
  type:string='Published';

  modelType:string='model';

  selctedCardInfo!:any;

  searchKey:any='';

  startDateFiltered:any;
  endDateFiltered:any;

  filterButtonFlag=true;

  dashboardFlag=true;

  modelFlag=true;
  listFlag=false;
  curData:any=[];

 

 


  constructor(private data:DataService,public dialog: MatDialog,private toastr: ToastrService) { 

  }

  ngOnInit(): void {

    //this.filteredData=this.data.getData(this.type);
    this.data.getData2().subscribe(
      data=> {
        this.filteredData=data;
        this.filteredData=JSON.parse(this.filteredData);
        this.data.setData( this.filteredData);
        this.filteredData=this.data.getData(this.type);
      } )

  }
 

  typeOfSurvey(type:any){

    this.data.preSelcetedCard='';
    this.data.slectedCard='',
    this.type=type.tab.textLabel;
    this.dashboardFlag=true;
    this.type=type.tab.textLabel;
    this.filteredData=this.data.getData(type.tab.textLabel);
  }

  onTyping(){
    if (this.searchKey=='') {
      this.filteredData=[]
      this.filteredData=this.data.getData('');
    }else {
    this.filteredData=[];
    this.filteredData=this.data.searchByName(this.searchKey,this.type);
    }



  }


  

  searchByDate(){
  
    let start=Date.parse(this.startDateFiltered);
    let end=Date.parse(this.endDateFiltered);
    if(start>end){
      this.toastr.warning('Date','End Date Should be after start date');
    }else
    if (this.startDateFiltered==''&&this.endDateFiltered=='') {
      this.filteredData=[];
      this.filteredData=this.data.getData(this.type);
    }else {
    this.filteredData=[];
    // this.filteredData=this.data.searchByDate(this.convertDate(),this.convertedEnd(),this.type);
     this.filteredData=this.data.searchByDate(this.startDateFiltered,this.endDateFiltered,this.type);

    }
    
    


  }

  // convertDate(){

  //   let start = Date.parse(this.startDateFiltered);
  //   var date = new Date(start);
  //   let month=date.getMonth()+1;
  //   let finalstart=date.getDate()+'/'+month+'/'+date.getFullYear();
    
    
  //   return finalstart.toString();
  // }

  // convertedEnd(){
  //   let end = Date.parse(this.endDateFiltered);
  //   var date = new Date(end);
  //   let monthEnd=date.getMonth()+1;
  //   let finalEnd=date.getDate()+'/'+monthEnd+'/'+date.getFullYear();
    
  //   return finalEnd.toString();
  // }

  clear(){
    this.startDateFiltered='';
    this.endDateFiltered='';
    this.filteredData=this.data.getData(this.type);
  }

  filterButton(){
    this.filterButtonFlag=!this.filterButtonFlag;
    console.log(this.filteredData)
  }

  clicked(){
    if (this.modelType=='list' &&this.data.slectedCard.length!=0) {
    this.dashboardFlag=false;
    }else
    if (this.modelType=='model') {
    this.dashboardFlag=false;
    }



  }

  viewChangeOnClick(type:string){
  
    this.data.slectedCard='';
    this.data.preSelcetedCard=''

    this.modelType=type
    if (type=='list') {
      if (this.listFlag==false) {
        this.listFlag=!this.listFlag;
        this.modelFlag=!this.modelFlag;
        this.dashboardFlag=true;
        
      }
    }else{
      if (this.modelFlag==false) {
        this.listFlag=!this.listFlag;
        this.modelFlag=!this.modelFlag;
        this.dashboardFlag=true;

      }
    }
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      height: '200px',
     // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


  selectCard(Survey:Surveys){
    this.filteredData.forEach((surveys:Surveys) => {
      surveys.isSelected=false;
    });
    let objIndex = this.filteredData.findIndex(((obj:Surveys) => obj.TEMPLATE_ID == Survey.TEMPLATE_ID));
    this.filteredData[objIndex].isSelected = true;

    console.log(this.filteredData);

  }





  }
 






