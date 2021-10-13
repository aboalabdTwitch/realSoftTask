import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   surveyType=new Subject<string>();

   type:string="Published";

   preSelcetedCard='';
   slectedCard='';

  constructor() { }


  dataJson:any[]=[
   {
      "TEMPLATE_ID":1,
      "TemplateName":"Disable Enable control #2 - Call Center ",
      "TemplateNameAr":" # تفعيل تعطيل ك ون ر تول 2 - مركز اتصال ",
      "TemplateNameEn":"Disable Enable control #2 - Call Center ",
      "SurveyName":"Disable Enable control #2",
      "SurveyNameAr":" تفعيل تعطيل ك ون ر تول # 2",
      "SurveyNameEn":"Disable Enable control #2",
      "SRV_ID":9223,
      "SystemType":3,
      "SURVEY_STATUS_AR":" منشورة ",
      "SURVEY_STATUS_EN":"Expired",
      "SurveyPeriods":"[{\"ID\":25710,\"START_DATE\":\"2021-07-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   },{
      "TEMPLATE_ID":2,
      "TemplateName":"periods test - Call Center ",
      "TemplateNameAr":" فحص الف ر تات - ???? ????? ",
      "TemplateNameEn":"periods test - Call Center ",
      "SurveyName":"periods test",
      "SurveyNameAr":" فحص الف ر تات ",
      "SurveyNameEn":"periods test",
      "SRV_ID":8866,
      "SystemType":3,
      "SURVEY_STATUS_AR":"منشورة ",
      "SURVEY_STATUS_EN":"Expired",
      "SurveyPeriods":"[{\"ID\":2510,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"},{\"ID\":257101,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   },{
      "TEMPLATE_ID":3,
      "TemplateName":"periods test - Call Center ",
      "TemplateNameAr":" فحص الف ر تات - ???? ????? ",
      "TemplateNameEn":"periods test - Call Center ",
      "SurveyName":"periods test",
      "SurveyNameAr":" فحص الف ر تات ",
      "SurveyNameEn":"periods test",
      "SRV_ID":8866,
      "SystemType":3,
      "SURVEY_STATUS_AR":"منشورة ",
      "SURVEY_STATUS_EN":"Expired",
      "SurveyPeriods":"[{\"ID\":2510,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"},{\"ID\":257101,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   },
   {
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
      "SurveyPeriods":"[{\"ID\":25710,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   },{
      "TEMPLATE_ID":26070,
      "TemplateName":"periods test - Call Center ",
      "TemplateNameAr":" فحص الف ر تات - ???? ????? ",
      "TemplateNameEn":"periods test - Call Center ",
      "SurveyName":"periods test",
      "SurveyNameAr":" فحص الف ر تات ",
      "SurveyNameEn":"periods test",
      "SRV_ID":8866,
      "SystemType":3,
      "SURVEY_STATUS_AR":"منشورة ",
      "SURVEY_STATUS_EN":"Published",
      "SurveyPeriods":"[{\"ID\":2510,\"START_DATE\":\"2021-07-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"},{\"ID\":257101,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   },{
      "TEMPLATE_ID":270,
      "TemplateName":"periods test - Call Center ",
      "TemplateNameAr":" فحص الف ر تات - ???? ????? ",
      "TemplateNameEn":"periods test - Call Center ",
      "SurveyName":"periods test",
      "SurveyNameAr":" فحص الف ر تات ",
      "SurveyNameEn":"periods test",
      "SRV_ID":8866,
      "SystemType":3,
      "SURVEY_STATUS_AR":"منشورة ",
      "SURVEY_STATUS_EN":"Published",
      "SurveyPeriods":"[{\"ID\":2510,\"START_DATE\":\"2021-07-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"},{\"ID\":257101,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
   }];

 

   setType(type:string){
      this.type=type;
   }

  getData(){


      console.log('getData:::', this.type)

     if (this.type==="Published") {
      return this.dataJson.filter(type=>type.SURVEY_STATUS_EN==='Published')

     }

     else if(this.type==="Expired"){
      return this.dataJson.filter(type=>type.SURVEY_STATUS_EN==='Expired')

     } 
     else if (this.type==="Closed") {
      return this.dataJson.filter(type=>type.SURVEY_STATUS_EN==='Closed')

     }
     else
    return this.dataJson.slice();
  }

//   searchByName(key:string)
//   {
//      return this.dataJson.find((data)=>{
//         return data.SurveyNameEn==key;
//      })

//   }

  searchByName(key:string,type:string){

   let arr=[]
   for(let x of this.dataJson){
      if(type=='All Surveys' && x.SurveyName==key){
         arr.push(x);
      }else
      if (x.SurveyName==key && type== x.SURVEY_STATUS_EN) {
         arr.push(x);
      }
   }
   return arr;
  }

  searchByDate(start:any,end:any){

   
      let arr=[]
      for(let x of this.dataJson){
         if(this.type=='All Surveys' 
             && this.convertDate(JSON.parse(x.SurveyPeriods)[0].START_DATE) ==start && 
                this.convertedEnd(JSON.parse(x.SurveyPeriods)[0].END_DATE)==end )
                   {
                     arr.push(x);
                  }else

         if (this.type== x.SURVEY_STATUS_EN 
                && this.convertDate(JSON.parse(x.SurveyPeriods)[0].START_DATE)==start && 
                this.convertedEnd(JSON.parse(x.SurveyPeriods)[0].END_DATE)==end) 
                     {
                        arr.push(x);
                     }
                  }

      return arr;
   
  }


  convertDate(startDate:any){

   let start = Date.parse(startDate);
   var date = new Date(start);
   let month=date.getMonth()+1;
   let finalstart=date.getDate()+'/'+month+'/'+date.getFullYear();
   
   
   return finalstart.toString();
 }

 convertedEnd(endDate:any){
   let end = Date.parse(endDate);
   var date = new Date(end);
   let monthEnd=date.getMonth()+1;
   let finalEnd=date.getDate()+'/'+monthEnd+'/'+date.getFullYear();
   
   return finalEnd.toString();
 }

  }

