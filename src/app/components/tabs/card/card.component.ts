import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() filteredData2!:any;
  @Input() type:string="Published";


  count=0;
  currentID=this.data.slectedCard;
  prevID=this.data.preSelcetedCard;
  

  @Output() cardSelected=new EventEmitter<any>();


  arr={
    "TEMPLATE_ID":27865,
    "TemplateName":"Disable Enable control #2 - Call Center ",
    "TemplateNameAr":" # تفعيل تعطيل ك ون ر تول 2 - مركز اتصال ",
    "TemplateNameEn":"Disable Enable control #2 - Call Center ",
    "SurveyName":"Disable Enable control #2",
    "SurveyNameAr":" تفعيل تعطيل ك ون ر تول # 2",
    "SurveyNameEn":"Disable Enable control #2",
    "SRV_ID":9223,
    "SystemType":3,
    "SURVEY_STATUS_AR":" منشورة ",
    "SURVEY_STATUS_EN":"Published",
    "SurveyPeriods":"[{\"ID\":6407,\"START_DATE\":\"2020-08-30T00:00:00\",\"END_DATE\":\"2020-09-05T00:00:00\"},{\"ID\":6408,\"START_DATE\":\"2020-09-06T00:00:00\",\"END_DATE\":\"2020-09-12T00:00:00\"},{\"ID\":6409,\"START_DATE\":\"2020-09-13T00:00:00\",\"END_DATE\":\"2020-09-19T00:00:00\"},{\"ID\":6410,\"START_DATE\":\"2020-09-20T00:00:00\",\"END_DATE\":\"2020-09-26T00:00:00\"},{\"ID\":6411,\"START_DATE\":\"2020-09-27T00:00:00\",\"END_DATE\":\"2020-10-03T00:00:00\"},{\"ID\":6412,\"START_DATE\":\"2020-10-04T00:00:00\",\"END_DATE\":\"2020-10-10T00:00:00\"},{\"ID\":6413,\"START_DATE\":\"2020-10-11T00:00:00\",\"END_DATE\":\"2020-10-17T00:00:00\"},{\"ID\":6414,\"START_DATE\":\"2020-10-18T00:00:00\",\"END_DATE\":\"2020-10-24T00:00:00\"},{\"ID\":6415,\"START_DATE\":\"2020-10-25T00:00:00\",\"END_DATE\":\"2020-10-31T00:00:00\"},{\"ID\":6416,\"START_DATE\":\"2020-11-01T00:00:00\",\"END_DATE\":\"2020-11-07T00:00:00\"},{\"ID\":6417,\"START_DATE\":\"2020-11-08T00:00:00\",\"END_DATE\":\"2020-11-14T00:00:00\"},{\"ID\":6418,\"START_DATE\":\"2020-11-15T00:00:00\",\"END_DATE\":\"2020-11-21T00:00:00\"},{\"ID\":6419,\"START_DATE\":\"2020-11-22T00:00:00\",\"END_DATE\":\"2020-11-28T00:00:00\"},{\"ID\":6420,\"START_DATE\":\"2020-11-29T00:00:00\",\"END_DATE\":\"2020-12-05T00:00:00\"},{\"ID\":6421,\"START_DATE\":\"2020-12-06T00:00:00\",\"END_DATE\":\"2020-12-12T00:00:00\"},{\"ID\":6422,\"START_DATE\":\"2020-12-13T00:00:00\",\"END_DATE\":\"2020-12-19T00:00:00\"},{\"ID\":6423,\"START_DATE\":\"2020-12-20T00:00:00\",\"END_DATE\":\"2020-12-26T00:00:00\"},{\"ID\":6424,\"START_DATE\":\"2020-12-27T00:00:00\",\"END_DATE\":\"2020-12-29T00:00:00\"}]"
  }


  constructor(private data:DataService) {
    
   }

  selected=false

 selectedID=this.data.slectedCard;

 startDate='';
 endDate='';



  ngOnInit(): void {

    }

    


    onSelected(card:any,type:string){
      console.log( this.data.preSelcetedCard+" pre commit ")

      if (type=='Published') {
        if (this.data.preSelcetedCard=='') {
          this.cardSelected.emit(card);
          this.data.slectedCard=card.TEMPLATE_ID;
          document.getElementById(card.TEMPLATE_ID)?.classList.toggle("published");
  
          this.data.preSelcetedCard=this.data.slectedCard;
        }else{
          document.getElementById(this.data.preSelcetedCard)?.classList.toggle("published");
          document.getElementById(card.TEMPLATE_ID)?.classList.toggle("published");
          this.data.slectedCard=card.TEMPLATE_ID;
          this.data.preSelcetedCard=this.data.slectedCard;
  
        }
      }
      
      
      else{

        // if (this.data.preSelcetedCard=='') {
        //   this.cardSelected.emit(card);
        //   this.data.slectedCard=card.TEMPLATE_ID;
        //   document.getElementById(card.TEMPLATE_ID)?.classList.toggle("expired");
  
        //   this.data.preSelcetedCard=this.data.slectedCard;
        // }else{
          document.getElementById(this.data.preSelcetedCard)?.classList.toggle("expired");
          document.getElementById(card.TEMPLATE_ID)?.classList.toggle("expired");
          this.data.slectedCard=card.TEMPLATE_ID;
          this.data.preSelcetedCard=this.data.slectedCard;
  
        //}

      }
      
     

      


    }


  check(){
  //  this.filteredData=this.data.getData();
  //  console.log(this.type);

  console.log(this.startDate)

  // for(let x of JSON.parse(this.arr.SurveyPeriods))
  // {
  // }

  //  let x=this.arr[0].SurveyPeriods


  //  let o=JSON.parse(x);
   
  //  console.log(o[0].START_DATE);


  }

}
  


