import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arr=[{
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
 }]

 constructor(){
   console.log(this.arr[0].SurveyPeriods)
 }




}
