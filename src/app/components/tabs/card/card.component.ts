import { JsonpClientBackend } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { Surveys } from '../model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showFlag :boolean=false;

  @Input() filteredData2!:any;
  @Input() type:string="Published";

  @Input() viewModel:any;
  


  currentID=this.data.slectedCard;
  prevID=this.data.preSelcetedCard;

  //for the date 
  selectedDateStart:any;
  selectedDateEnd:any;
  

  @Output() cardSelected=new EventEmitter<any>();



 selectedID=this.data.slectedCard;


 


  constructor(private data:DataService) {}

  
  ngOnInit(): void {
    }


    JSONMe(data:any ){
      if(typeof data!=='undefined'){
          return JSON.parse(data);
      }else return false
  } 

    onSelected(card:Surveys,type:string){

      card.isSelected=true;
      this.cardSelected.emit(card);


     

      // if (type=='Published') {
      //   if (this.data.preSelcetedCard=='') {
      //     this.cardSelected.emit(card);
      //     this.data.slectedCard=card.TEMPLATE_ID;
      //     document.getElementById(card.TEMPLATE_ID)?.classList.toggle("published");
  
      //     this.data.preSelcetedCard=this.data.slectedCard;
      //   }else{
      //     document.getElementById(this.data.preSelcetedCard)?.classList.toggle("published");
      //     document.getElementById(card.TEMPLATE_ID)?.classList.toggle("published");
      //     this.data.slectedCard=card.TEMPLATE_ID;
      //     this.data.preSelcetedCard=this.data.slectedCard;
  
      //   }
      // }
      
      
      // else{
        
      //     document.getElementById(this.data.preSelcetedCard)?.classList.toggle("expired");
      //     document.getElementById(card.TEMPLATE_ID)?.classList.toggle("expired");
      //     this.data.slectedCard=card.TEMPLATE_ID;
      //     this.data.preSelcetedCard=this.data.slectedCard;
  
        

      // }
      
     

      


    }


    selectedDate(data :any){

      this.selectedDateStart=data.START_DATE;
      this.selectedDateEnd=data.END_DATE;
      this.showFlag=false;
    }

    show(){
      this.showFlag=!this.showFlag;
      
    }
  

    check(){
     console.log(this.type)

    }

   
}
  


