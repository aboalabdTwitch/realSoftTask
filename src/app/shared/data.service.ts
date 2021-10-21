import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   surveyType=new Subject<string>();

  // type:string="Published";

   preSelcetedCard='';
   slectedCard='';

   url='http://localhost:3000/surveys'
   //url='https://jsonplaceholder.typicode.com/users'


  constructor(private http :HttpClient) { }


  getData2(){
     return this.http.get(this.url);

  }

//   dataJson=[{
//    "TEMPLATE_ID":27865,
//    "TemplateName":"Disable Enable control #2 - Call Center ",
//    "TemplateNameAr":"تفعيل تعطيل كونترول #2-  مركز اتصال ",
//    "TemplateNameEn":"Disable Enable control #2 - Call Center ",
//    "SurveyName":"Disable Enable control #2",
//    "SurveyNameAr":"تفعيل تعطيل كونترول #2",
//    "SurveyNameEn":"Disable Enable control #2",
//    "SRV_ID":9223,
//    "SystemType":3,
//    "SURVEY_STATUS_AR":"منشورة",
//    "SURVEY_STATUS_EN":"Published",
//    "SurveyPeriods":"[{\"ID\":25710,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
// },  {
//    "TEMPLATE_ID":26070,
//    "TemplateName":"periods test - Call Center ",
//    "TemplateNameAr":"فحص الفترات- ???? ????? ",
//    "TemplateNameEn":"periods test - Call Center ",
//    "SurveyName":"periods test",
//    "SurveyNameAr":"فحص الفترات",
//    "SurveyNameEn":"periods test",
//    "SRV_ID":8866,
//    "SystemType":3,
//    "SURVEY_STATUS_AR":"منشورة",
//    "SURVEY_STATUS_EN":"Published",
//    "SurveyPeriods":"[{\"ID\":23524,\"START_DATE\":\"2021-03-20T00:00:00\",\"END_DATE\":\"2021-03-26T00:00:00\"},{\"ID\":23525,\"START_DATE\":\"2021-03-27T00:00:00\",\"END_DATE\":\"2021-04-02T00:00:00\"},{\"ID\":23526,\"START_DATE\":\"2021-04-03T00:00:00\",\"END_DATE\":\"2021-04-09T00:00:00\"},{\"ID\":23527,\"START_DATE\":\"2021-04-10T00:00:00\",\"END_DATE\":\"2021-04-16T00:00:00\"},{\"ID\":23528,\"START_DATE\":\"2021-04-17T00:00:00\",\"END_DATE\":\"2021-04-23T00:00:00\"},{\"ID\":23529,\"START_DATE\":\"2021-04-24T00:00:00\",\"END_DATE\":\"2021-04-30T00:00:00\"},{\"ID\":23530,\"START_DATE\":\"2021-05-01T00:00:00\",\"END_DATE\":\"2021-05-07T00:00:00\"},{\"ID\":23531,\"START_DATE\":\"2021-05-08T00:00:00\",\"END_DATE\":\"2021-05-14T00:00:00\"},{\"ID\":23532,\"START_DATE\":\"2021-05-15T00:00:00\",\"END_DATE\":\"2021-05-21T00:00:00\"},{\"ID\":23533,\"START_DATE\":\"2021-05-22T00:00:00\",\"END_DATE\":\"2021-05-28T00:00:00\"},{\"ID\":23534,\"START_DATE\":\"2021-05-29T00:00:00\",\"END_DATE\":\"2021-06-04T00:00:00\"},{\"ID\":23535,\"START_DATE\":\"2021-06-05T00:00:00\",\"END_DATE\":\"2021-06-11T00:00:00\"},{\"ID\":23536,\"START_DATE\":\"2021-06-12T00:00:00\",\"END_DATE\":\"2021-06-18T00:00:00\"},{\"ID\":23537,\"START_DATE\":\"2021-06-19T00:00:00\",\"END_DATE\":\"2021-06-25T00:00:00\"},{\"ID\":23538,\"START_DATE\":\"2021-06-26T00:00:00\",\"END_DATE\":\"2021-07-02T00:00:00\"},{\"ID\":23539,\"START_DATE\":\"2021-07-03T00:00:00\",\"END_DATE\":\"2021-07-09T00:00:00\"},{\"ID\":23540,\"START_DATE\":\"2021-07-10T00:00:00\",\"END_DATE\":\"2021-07-16T00:00:00\"},{\"ID\":23541,\"START_DATE\":\"2021-07-17T00:00:00\",\"END_DATE\":\"2021-07-23T00:00:00\"},{\"ID\":23542,\"START_DATE\":\"2021-07-24T00:00:00\",\"END_DATE\":\"2021-07-30T00:00:00\"},{\"ID\":23543,\"START_DATE\":\"2021-07-31T00:00:00\",\"END_DATE\":\"2021-08-06T00:00:00\"},{\"ID\":23544,\"START_DATE\":\"2021-08-07T00:00:00\",\"END_DATE\":\"2021-08-13T00:00:00\"},{\"ID\":23545,\"START_DATE\":\"2021-08-14T00:00:00\",\"END_DATE\":\"2021-08-20T00:00:00\"},{\"ID\":23546,\"START_DATE\":\"2021-08-21T00:00:00\",\"END_DATE\":\"2021-08-27T00:00:00\"},{\"ID\":23547,\"START_DATE\":\"2021-08-28T00:00:00\",\"END_DATE\":\"2021-09-03T00:00:00\"},{\"ID\":23548,\"START_DATE\":\"2021-09-04T00:00:00\",\"END_DATE\":\"2021-09-10T00:00:00\"},{\"ID\":23549,\"START_DATE\":\"2021-09-11T00:00:00\",\"END_DATE\":\"2021-09-17T00:00:00\"},{\"ID\":23550,\"START_DATE\":\"2021-09-18T00:00:00\",\"END_DATE\":\"2021-09-24T00:00:00\"},{\"ID\":23551,\"START_DATE\":\"2021-09-25T00:00:00\",\"END_DATE\":\"2021-10-01T00:00:00\"},{\"ID\":23552,\"START_DATE\":\"2021-10-02T00:00:00\",\"END_DATE\":\"2021-10-08T00:00:00\"},{\"ID\":23553,\"START_DATE\":\"2021-10-09T00:00:00\",\"END_DATE\":\"2021-10-15T00:00:00\"},{\"ID\":23554,\"START_DATE\":\"2021-10-16T00:00:00\",\"END_DATE\":\"2021-10-22T00:00:00\"},{\"ID\":23555,\"START_DATE\":\"2021-10-23T00:00:00\",\"END_DATE\":\"2021-10-29T00:00:00\"},{\"ID\":23556,\"START_DATE\":\"2021-10-30T00:00:00\",\"END_DATE\":\"2021-11-05T00:00:00\"},{\"ID\":23557,\"START_DATE\":\"2021-11-06T00:00:00\",\"END_DATE\":\"2021-11-12T00:00:00\"},{\"ID\":23558,\"START_DATE\":\"2021-11-13T00:00:00\",\"END_DATE\":\"2021-11-19T00:00:00\"},{\"ID\":23559,\"START_DATE\":\"2021-11-20T00:00:00\",\"END_DATE\":\"2021-11-26T00:00:00\"},{\"ID\":23560,\"START_DATE\":\"2021-11-27T00:00:00\",\"END_DATE\":\"2021-12-03T00:00:00\"},{\"ID\":23561,\"START_DATE\":\"2021-12-04T00:00:00\",\"END_DATE\":\"2021-12-10T00:00:00\"},{\"ID\":23562,\"START_DATE\":\"2021-12-11T00:00:00\",\"END_DATE\":\"2021-12-17T00:00:00\"},{\"ID\":23563,\"START_DATE\":\"2021-12-18T00:00:00\",\"END_DATE\":\"2021-12-24T00:00:00\"},{\"ID\":23564,\"START_DATE\":\"2021-12-25T00:00:00\",\"END_DATE\":\"2021-12-28T00:00:00\"}]"
// }, {
//    "TEMPLATE_ID":21456,
//    "TemplateName":"call canter survey 31-5 - Call Center ",
//    "TemplateNameAr":"استمارة مركز اتصال 31-5- مركز اتصال ",
//    "TemplateNameEn":"call canter survey 31-5 - Call Center ",
//    "SurveyName":"call canter survey 31-5",
//    "SurveyNameAr":"استمارة مركز اتصال 31-5",
//    "SurveyNameEn":"call canter survey 31-5",
//    "SRV_ID":7819,
//    "SystemType":3,
//    "SURVEY_STATUS_AR":"منشورة",
//    "SURVEY_STATUS_EN":"Published",
//    "SurveyPeriods":"[{\"ID\":5929,\"START_DATE\":\"2020-05-31T00:00:00\",\"END_DATE\":\"2025-12-31T00:00:00\"}]"
// },
// {
//    "TEMPLATE_ID":20385,
//    "TemplateName":"Queue definition survey  _ Copy - Call Center ",
//    "TemplateNameAr":"فحص 0604- مركز اتصال ",
//    "TemplateNameEn":"Queue definition survey  _ Copy - Call Center ",
//    "SurveyName":"Queue definition survey  _ Copy",
//    "SurveyNameAr":"فحص 0604",
//    "SurveyNameEn":"Queue definition survey  _ Copy",
//    "SRV_ID":7544,
//    "SystemType":3,
//    "SURVEY_STATUS_AR":"منشورة",
//    "SURVEY_STATUS_EN":"Published",
//    "SurveyPeriods":"[{\"ID\":5642,\"START_DATE\":\"2020-04-06T00:00:00\",\"END_DATE\":\"2022-03-31T00:00:00\"}]"
// }];

//   dataJson:any[]=[[

//       {
//          "TEMPLATE_ID":27865,
//          "TemplateName":"Disable Enable control #2 - Call Center ",
//          "TemplateNameAr":"تفعيل تعطيل كونترول #2-  مركز اتصال ",
//          "TemplateNameEn":"Disable Enable control #2 - Call Center ",
//          "SurveyName":"Disable Enable control #2",
//          "SurveyNameAr":"تفعيل تعطيل كونترول #2",
//          "SurveyNameEn":"Disable Enable control #2",
//          "SRV_ID":9223,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":null
//       },
//       {
//          "TEMPLATE_ID":27862,
//          "TemplateName":"11 - Call Center ",
//          "TemplateNameAr":"11- مركز اتصال ",
//          "TemplateNameEn":"11 - Call Center ",
//          "SurveyName":"11",
//          "SurveyNameAr":"11",
//          "SurveyNameEn":"11",
//          "SRV_ID":9222,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":25709,\"START_DATE\":\"2021-06-29T00:00:00\",\"END_DATE\":\"2021-09-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27859,
//          "TemplateName":"tablet - Call Center ",
//          "TemplateNameAr":"تابليت- مركز اتصال ",
//          "TemplateNameEn":"tablet - Call Center ",
//          "SurveyName":"tablet",
//          "SurveyNameAr":"تابليت",
//          "SurveyNameEn":"tablet",
//          "SRV_ID":9220,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":25707,\"START_DATE\":\"2021-06-29T00:00:00\",\"END_DATE\":\"2021-07-06T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27731,
//          "TemplateName":"searchable inside matrix - Call Center ",
//          "TemplateNameAr":"قائمة بحث بداتخل ماتركس- مركز اتصال ",
//          "TemplateNameEn":"searchable inside matrix - Call Center ",
//          "SurveyName":"searchable inside matrix",
//          "SurveyNameAr":"قائمة بحث بداتخل ماتركس",
//          "SurveyNameEn":"searchable inside matrix",
//          "SRV_ID":9188,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":25589,\"START_DATE\":\"2021-06-22T00:00:00\",\"END_DATE\":\"2021-12-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27399,
//          "TemplateName":"Rank test #3 - Call Center ",
//          "TemplateNameAr":"رانك تست #3-  مركز اتصال ",
//          "TemplateNameEn":"Rank test #3 - Call Center ",
//          "SurveyName":"Rank test #3",
//          "SurveyNameAr":"رانك تست #3",
//          "SurveyNameEn":"Rank test #3",
//          "SRV_ID":9129,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":25229,\"START_DATE\":\"2021-06-09T00:00:00\",\"END_DATE\":\"2021-09-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27074,
//          "TemplateName":"Notification #1  - Call Center ",
//          "TemplateNameAr":"اشعارات #1-  مركز اتصال ",
//          "TemplateNameEn":"Notification #1  - Call Center ",
//          "SurveyName":"Notification #1 ",
//          "SurveyNameAr":"اشعارات #1",
//          "SurveyNameEn":"Notification #1 ",
//          "SRV_ID":9047,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":24425,\"START_DATE\":\"2021-05-24T00:00:00\",\"END_DATE\":\"2022-07-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26936,
//          "TemplateName":"Tourism Survey Draft #22 _ Copy - Call Center ",
//          "TemplateNameAr":"استمارة السياحة - مسودة 22 - ???? ????? ",
//          "TemplateNameEn":"Tourism Survey Draft #22 _ Copy - Call Center ",
//          "SurveyName":"Tourism Survey Draft #22 _ Copy",
//          "SurveyNameAr":"استمارة السياحة - مسودة 22 ",
//          "SurveyNameEn":"Tourism Survey Draft #22 _ Copy",
//          "SRV_ID":9022,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23808,\"START_DATE\":\"2021-05-18T00:00:00\",\"END_DATE\":\"2022-07-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24966,
//          "TemplateName":"Tourism Survey Draft #22 - Call Center ",
//          "TemplateNameAr":"استمارة السياحة - مسودة 22- ???? ????? ",
//          "TemplateNameEn":"Tourism Survey Draft #22 - Call Center ",
//          "SurveyName":"Tourism Survey Draft #22",
//          "SurveyNameAr":"استمارة السياحة - مسودة 22",
//          "SurveyNameEn":"Tourism Survey Draft #22",
//          "SRV_ID":8725,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":21479,\"START_DATE\":\"2021-01-16T00:00:00\",\"END_DATE\":\"2021-12-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26979,
//          "TemplateName":"admin system - layers issue - Call Center ",
//          "TemplateNameAr":"ادمن تست- ???? ????? ",
//          "TemplateNameEn":"admin system - layers issue - Call Center ",
//          "SurveyName":"admin system - layers issue",
//          "SurveyNameAr":"ادمن تست",
//          "SurveyNameEn":"admin system - layers issue",
//          "SRV_ID":9019,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23805,\"START_DATE\":\"2021-05-17T00:00:00\",\"END_DATE\":\"2021-12-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26632,
//          "TemplateName":"2604 Pull #1 - Call Center ",
//          "TemplateNameAr":"1604 سحب #1- مركز اتصال ",
//          "TemplateNameEn":"2604 Pull #1 - Call Center ",
//          "SurveyName":"2604 Pull #1",
//          "SurveyNameAr":"1604 سحب #1",
//          "SurveyNameEn":"2604 Pull #1",
//          "SRV_ID":8983,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23365,\"START_DATE\":\"2021-04-25T00:00:00\",\"END_DATE\":\"2022-02-26T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26567,
//          "TemplateName":"1404 Pull test #3 - Call Center ",
//          "TemplateNameAr":"1404 سحب #3- مركز اتصال ",
//          "TemplateNameEn":"1404 Pull test #3 - Call Center ",
//          "SurveyName":"1404 Pull test #3",
//          "SurveyNameAr":"1404 سحب #3",
//          "SurveyNameEn":"1404 Pull test #3",
//          "SRV_ID":8964,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23281,\"START_DATE\":\"2021-04-18T00:00:00\",\"END_DATE\":\"2022-05-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26370,
//          "TemplateName":"CC 1204 - Call Center ",
//          "TemplateNameAr":"كول سنتر 1204- ???? ????? ",
//          "TemplateNameEn":"CC 1204 - Call Center ",
//          "SurveyName":"CC 1204",
//          "SurveyNameAr":"كول سنتر 1204",
//          "SurveyNameEn":"CC 1204",
//          "SRV_ID":8908,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23083,\"START_DATE\":\"2021-04-11T00:00:00\",\"END_DATE\":\"2022-03-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26474,
//          "TemplateName":"18042021 - Call Center ",
//          "TemplateNameAr":"18042021- مركز اتصال ",
//          "TemplateNameEn":"18042021 - Call Center ",
//          "SurveyName":"18042021",
//          "SurveyNameAr":"18042021",
//          "SurveyNameEn":"18042021",
//          "SRV_ID":8933,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23204,\"START_DATE\":\"2021-04-18T00:00:00\",\"END_DATE\":\"2021-09-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26438,
//          "TemplateName":"1404 pull test #2 - Call Center ",
//          "TemplateNameAr":"1404 سحب #2- مركز اتصال ",
//          "TemplateNameEn":"1404 pull test #2 - Call Center ",
//          "SurveyName":"1404 pull test #2",
//          "SurveyNameAr":"1404 سحب #2",
//          "SurveyNameEn":"1404 pull test #2",
//          "SRV_ID":8927,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23176,\"START_DATE\":\"2021-04-11T00:00:00\",\"END_DATE\":\"2022-02-27T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26436,
//          "TemplateName":"1404 Pull test #1 - Call Center ",
//          "TemplateNameAr":"1404 فحص سحب #1- مركز اتصال ",
//          "TemplateNameEn":"1404 Pull test #1 - Call Center ",
//          "SurveyName":"1404 Pull test #1",
//          "SurveyNameAr":"1404 فحص سحب #1",
//          "SurveyNameEn":"1404 Pull test #1",
//          "SRV_ID":8926,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23175,\"START_DATE\":\"2021-04-12T00:00:00\",\"END_DATE\":\"2021-11-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26070,
//          "TemplateName":"periods test - Call Center ",
//          "TemplateNameAr":"فحص الفترات- ???? ????? ",
//          "TemplateNameEn":"periods test - Call Center ",
//          "SurveyName":"periods test",
//          "SurveyNameAr":"فحص الفترات",
//          "SurveyNameEn":"periods test",
//          "SRV_ID":8866,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":23524,\"START_DATE\":\"2021-03-20T00:00:00\",\"END_DATE\":\"2021-03-26T00:00:00\"},{\"ID\":23525,\"START_DATE\":\"2021-03-27T00:00:00\",\"END_DATE\":\"2021-04-02T00:00:00\"},{\"ID\":23526,\"START_DATE\":\"2021-04-03T00:00:00\",\"END_DATE\":\"2021-04-09T00:00:00\"},{\"ID\":23527,\"START_DATE\":\"2021-04-10T00:00:00\",\"END_DATE\":\"2021-04-16T00:00:00\"},{\"ID\":23528,\"START_DATE\":\"2021-04-17T00:00:00\",\"END_DATE\":\"2021-04-23T00:00:00\"},{\"ID\":23529,\"START_DATE\":\"2021-04-24T00:00:00\",\"END_DATE\":\"2021-04-30T00:00:00\"},{\"ID\":23530,\"START_DATE\":\"2021-05-01T00:00:00\",\"END_DATE\":\"2021-05-07T00:00:00\"},{\"ID\":23531,\"START_DATE\":\"2021-05-08T00:00:00\",\"END_DATE\":\"2021-05-14T00:00:00\"},{\"ID\":23532,\"START_DATE\":\"2021-05-15T00:00:00\",\"END_DATE\":\"2021-05-21T00:00:00\"},{\"ID\":23533,\"START_DATE\":\"2021-05-22T00:00:00\",\"END_DATE\":\"2021-05-28T00:00:00\"},{\"ID\":23534,\"START_DATE\":\"2021-05-29T00:00:00\",\"END_DATE\":\"2021-06-04T00:00:00\"},{\"ID\":23535,\"START_DATE\":\"2021-06-05T00:00:00\",\"END_DATE\":\"2021-06-11T00:00:00\"},{\"ID\":23536,\"START_DATE\":\"2021-06-12T00:00:00\",\"END_DATE\":\"2021-06-18T00:00:00\"},{\"ID\":23537,\"START_DATE\":\"2021-06-19T00:00:00\",\"END_DATE\":\"2021-06-25T00:00:00\"},{\"ID\":23538,\"START_DATE\":\"2021-06-26T00:00:00\",\"END_DATE\":\"2021-07-02T00:00:00\"},{\"ID\":23539,\"START_DATE\":\"2021-07-03T00:00:00\",\"END_DATE\":\"2021-07-09T00:00:00\"},{\"ID\":23540,\"START_DATE\":\"2021-07-10T00:00:00\",\"END_DATE\":\"2021-07-16T00:00:00\"},{\"ID\":23541,\"START_DATE\":\"2021-07-17T00:00:00\",\"END_DATE\":\"2021-07-23T00:00:00\"},{\"ID\":23542,\"START_DATE\":\"2021-07-24T00:00:00\",\"END_DATE\":\"2021-07-30T00:00:00\"},{\"ID\":23543,\"START_DATE\":\"2021-07-31T00:00:00\",\"END_DATE\":\"2021-08-06T00:00:00\"},{\"ID\":23544,\"START_DATE\":\"2021-08-07T00:00:00\",\"END_DATE\":\"2021-08-13T00:00:00\"},{\"ID\":23545,\"START_DATE\":\"2021-08-14T00:00:00\",\"END_DATE\":\"2021-08-20T00:00:00\"},{\"ID\":23546,\"START_DATE\":\"2021-08-21T00:00:00\",\"END_DATE\":\"2021-08-27T00:00:00\"},{\"ID\":23547,\"START_DATE\":\"2021-08-28T00:00:00\",\"END_DATE\":\"2021-09-03T00:00:00\"},{\"ID\":23548,\"START_DATE\":\"2021-09-04T00:00:00\",\"END_DATE\":\"2021-09-10T00:00:00\"},{\"ID\":23549,\"START_DATE\":\"2021-09-11T00:00:00\",\"END_DATE\":\"2021-09-17T00:00:00\"},{\"ID\":23550,\"START_DATE\":\"2021-09-18T00:00:00\",\"END_DATE\":\"2021-09-24T00:00:00\"},{\"ID\":23551,\"START_DATE\":\"2021-09-25T00:00:00\",\"END_DATE\":\"2021-10-01T00:00:00\"},{\"ID\":23552,\"START_DATE\":\"2021-10-02T00:00:00\",\"END_DATE\":\"2021-10-08T00:00:00\"},{\"ID\":23553,\"START_DATE\":\"2021-10-09T00:00:00\",\"END_DATE\":\"2021-10-15T00:00:00\"},{\"ID\":23554,\"START_DATE\":\"2021-10-16T00:00:00\",\"END_DATE\":\"2021-10-22T00:00:00\"},{\"ID\":23555,\"START_DATE\":\"2021-10-23T00:00:00\",\"END_DATE\":\"2021-10-29T00:00:00\"},{\"ID\":23556,\"START_DATE\":\"2021-10-30T00:00:00\",\"END_DATE\":\"2021-11-05T00:00:00\"},{\"ID\":23557,\"START_DATE\":\"2021-11-06T00:00:00\",\"END_DATE\":\"2021-11-12T00:00:00\"},{\"ID\":23558,\"START_DATE\":\"2021-11-13T00:00:00\",\"END_DATE\":\"2021-11-19T00:00:00\"},{\"ID\":23559,\"START_DATE\":\"2021-11-20T00:00:00\",\"END_DATE\":\"2021-11-26T00:00:00\"},{\"ID\":23560,\"START_DATE\":\"2021-11-27T00:00:00\",\"END_DATE\":\"2021-12-03T00:00:00\"},{\"ID\":23561,\"START_DATE\":\"2021-12-04T00:00:00\",\"END_DATE\":\"2021-12-10T00:00:00\"},{\"ID\":23562,\"START_DATE\":\"2021-12-11T00:00:00\",\"END_DATE\":\"2021-12-17T00:00:00\"},{\"ID\":23563,\"START_DATE\":\"2021-12-18T00:00:00\",\"END_DATE\":\"2021-12-24T00:00:00\"},{\"ID\":23564,\"START_DATE\":\"2021-12-25T00:00:00\",\"END_DATE\":\"2021-12-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25887,
//          "TemplateName":"login and reports CC - Call Center ",
//          "TemplateNameAr":"فحص الكول سنتر - مركز اتصال ",
//          "TemplateNameEn":"login and reports CC - Call Center ",
//          "SurveyName":"login and reports CC",
//          "SurveyNameAr":"فحص الكول سنتر ",
//          "SurveyNameEn":"login and reports CC",
//          "SRV_ID":8841,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":22563,\"START_DATE\":\"2021-03-10T00:00:00\",\"END_DATE\":\"2021-03-16T00:00:00\"},{\"ID\":22564,\"START_DATE\":\"2021-03-17T00:00:00\",\"END_DATE\":\"2021-03-23T00:00:00\"},{\"ID\":22565,\"START_DATE\":\"2021-03-24T00:00:00\",\"END_DATE\":\"2021-03-30T00:00:00\"},{\"ID\":22566,\"START_DATE\":\"2021-03-31T00:00:00\",\"END_DATE\":\"2021-04-06T00:00:00\"},{\"ID\":22567,\"START_DATE\":\"2021-04-07T00:00:00\",\"END_DATE\":\"2021-04-13T00:00:00\"},{\"ID\":22568,\"START_DATE\":\"2021-04-14T00:00:00\",\"END_DATE\":\"2021-04-20T00:00:00\"},{\"ID\":22569,\"START_DATE\":\"2021-04-21T00:00:00\",\"END_DATE\":\"2021-04-27T00:00:00\"},{\"ID\":22570,\"START_DATE\":\"2021-04-28T00:00:00\",\"END_DATE\":\"2021-05-04T00:00:00\"},{\"ID\":22571,\"START_DATE\":\"2021-05-05T00:00:00\",\"END_DATE\":\"2021-05-11T00:00:00\"},{\"ID\":22572,\"START_DATE\":\"2021-05-12T00:00:00\",\"END_DATE\":\"2021-05-18T00:00:00\"},{\"ID\":22573,\"START_DATE\":\"2021-05-19T00:00:00\",\"END_DATE\":\"2021-05-25T00:00:00\"},{\"ID\":22574,\"START_DATE\":\"2021-05-26T00:00:00\",\"END_DATE\":\"2021-06-01T00:00:00\"},{\"ID\":22575,\"START_DATE\":\"2021-06-02T00:00:00\",\"END_DATE\":\"2021-06-08T00:00:00\"},{\"ID\":22576,\"START_DATE\":\"2021-06-09T00:00:00\",\"END_DATE\":\"2021-06-15T00:00:00\"},{\"ID\":22577,\"START_DATE\":\"2021-06-16T00:00:00\",\"END_DATE\":\"2021-06-22T00:00:00\"},{\"ID\":22578,\"START_DATE\":\"2021-06-23T00:00:00\",\"END_DATE\":\"2021-06-29T00:00:00\"},{\"ID\":22579,\"START_DATE\":\"2021-06-30T00:00:00\",\"END_DATE\":\"2021-07-06T00:00:00\"},{\"ID\":22580,\"START_DATE\":\"2021-07-07T00:00:00\",\"END_DATE\":\"2021-07-13T00:00:00\"},{\"ID\":22581,\"START_DATE\":\"2021-07-14T00:00:00\",\"END_DATE\":\"2021-07-20T00:00:00\"},{\"ID\":22582,\"START_DATE\":\"2021-07-21T00:00:00\",\"END_DATE\":\"2021-07-27T00:00:00\"},{\"ID\":22583,\"START_DATE\":\"2021-07-28T00:00:00\",\"END_DATE\":\"2021-07-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25147,
//          "TemplateName":"TS 26-1-2021 - Call Center ",
//          "TemplateNameAr":"سياحة 26-1-2021- مركز اتصال ",
//          "TemplateNameEn":"TS 26-1-2021 - Call Center ",
//          "SurveyName":"TS 26-1-2021",
//          "SurveyNameAr":"سياحة 26-1-2021",
//          "SurveyNameEn":"TS 26-1-2021",
//          "SRV_ID":8747,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":21659,\"START_DATE\":\"2021-01-26T00:00:00\",\"END_DATE\":\"2022-02-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24164,
//          "TemplateName":"iframe  - Call Center ",
//          "TemplateNameAr":"اي فريم- ???? ????? ",
//          "TemplateNameEn":"iframe  - Call Center ",
//          "SurveyName":"iframe ",
//          "SurveyNameAr":"اي فريم",
//          "SurveyNameEn":"iframe ",
//          "SRV_ID":8526,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":null
//       },
//       {
//          "TEMPLATE_ID":24096,
//          "TemplateName":"Runtime evaluation 1911 - Call Center ",
//          "TemplateNameAr":"تقييم رن تايم 1911- مركز اتصال ",
//          "TemplateNameEn":"Runtime evaluation 1911 - Call Center ",
//          "SurveyName":"Runtime evaluation 1911",
//          "SurveyNameAr":"تقييم رن تايم 1911",
//          "SurveyNameEn":"Runtime evaluation 1911",
//          "SRV_ID":8470,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":7137,\"START_DATE\":\"2020-11-19T00:00:00\",\"END_DATE\":\"2022-02-26T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":23942,
//          "TemplateName":"Updating Survey _ Copy - Call Center ",
//          "TemplateNameAr":"تحديث الاطار _ نسخة- مركز اتصال ",
//          "TemplateNameEn":"Updating Survey _ Copy - Call Center ",
//          "SurveyName":"Updating Survey _ Copy",
//          "SurveyNameAr":"تحديث الاطار _ نسخة",
//          "SurveyNameEn":"Updating Survey _ Copy",
//          "SRV_ID":8474,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":7141,\"START_DATE\":\"2020-09-01T00:00:00\",\"END_DATE\":\"2021-08-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":22753,
//          "TemplateName":"evaluate call center - Call Center ",
//          "TemplateNameAr":"تقييم مركز الاتصال- مركز اتصال ",
//          "TemplateNameEn":"evaluate call center - Call Center ",
//          "SurveyName":"evaluate call center",
//          "SurveyNameAr":"تقييم مركز الاتصال",
//          "SurveyNameEn":"evaluate call center",
//          "SRV_ID":8217,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":6359,\"START_DATE\":\"2020-08-19T00:00:00\",\"END_DATE\":\"2021-10-21T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21872,
//          "TemplateName":"cascade 22-6 - Call Center ",
//          "TemplateNameAr":"22-6- مركز اتصال ",
//          "TemplateNameEn":"cascade 22-6 - Call Center ",
//          "SurveyName":"cascade 22-6",
//          "SurveyNameAr":"22-6",
//          "SurveyNameEn":"cascade 22-6",
//          "SRV_ID":7934,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":6053,\"START_DATE\":\"2020-03-01T00:00:00\",\"END_DATE\":\"2022-05-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21458,
//          "TemplateName":"call canter survey 31-5 -- 2 _ Copy - Call Center ",
//          "TemplateNameAr":"استمارة مركز اتصال 31-5 --2 _ نسخة- مركز اتصال ",
//          "TemplateNameEn":"call canter survey 31-5 -- 2 _ Copy - Call Center ",
//          "SurveyName":"call canter survey 31-5 -- 2 _ Copy",
//          "SurveyNameAr":"استمارة مركز اتصال 31-5 --2 _ نسخة",
//          "SurveyNameEn":"call canter survey 31-5 -- 2 _ Copy",
//          "SRV_ID":7821,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":5931,\"START_DATE\":\"2020-05-31T00:00:00\",\"END_DATE\":\"2025-12-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21456,
//          "TemplateName":"call canter survey 31-5 - Call Center ",
//          "TemplateNameAr":"استمارة مركز اتصال 31-5- مركز اتصال ",
//          "TemplateNameEn":"call canter survey 31-5 - Call Center ",
//          "SurveyName":"call canter survey 31-5",
//          "SurveyNameAr":"استمارة مركز اتصال 31-5",
//          "SurveyNameEn":"call canter survey 31-5",
//          "SRV_ID":7819,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":5929,\"START_DATE\":\"2020-05-31T00:00:00\",\"END_DATE\":\"2025-12-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20385,
//          "TemplateName":"Queue definition survey  _ Copy - Call Center ",
//          "TemplateNameAr":"فحص 0604- مركز اتصال ",
//          "TemplateNameEn":"Queue definition survey  _ Copy - Call Center ",
//          "SurveyName":"Queue definition survey  _ Copy",
//          "SurveyNameAr":"فحص 0604",
//          "SurveyNameEn":"Queue definition survey  _ Copy",
//          "SRV_ID":7544,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منشورة",
//          "SURVEY_STATUS_EN":"Published",
//          "SurveyPeriods":"[{\"ID\":5642,\"START_DATE\":\"2020-04-06T00:00:00\",\"END_DATE\":\"2022-03-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27255,
//          "TemplateName":"unique - Call Center ",
//          "TemplateNameAr":"عدم تكرار الاجابة - مركز اتصال ",
//          "TemplateNameEn":"unique - Call Center ",
//          "SurveyName":"unique",
//          "SurveyNameAr":"عدم تكرار الاجابة ",
//          "SurveyNameEn":"unique",
//          "SRV_ID":9087,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":24754,\"START_DATE\":\"2021-06-02T00:00:00\",\"END_DATE\":\"2021-06-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":27256,
//          "TemplateName":"unique _ Copy - Call Center ",
//          "TemplateNameAr":"عدم تكرار الاجابة  _ نسخة- مركز اتصال ",
//          "TemplateNameEn":"unique _ Copy - Call Center ",
//          "SurveyName":"unique _ Copy",
//          "SurveyNameAr":"عدم تكرار الاجابة  _ نسخة",
//          "SurveyNameEn":"unique _ Copy",
//          "SRV_ID":9096,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":25087,\"START_DATE\":\"2021-06-02T00:00:00\",\"END_DATE\":\"2021-06-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26690,
//          "TemplateName":"private - change password   - Call Center ",
//          "TemplateNameAr":"برايفت - تغيير الباسورد- مركز اتصال ",
//          "TemplateNameEn":"private - change password   - Call Center ",
//          "SurveyName":"private - change password  ",
//          "SurveyNameAr":"برايفت - تغيير الباسورد",
//          "SurveyNameEn":"private - change password  ",
//          "SRV_ID":8981,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":23363,\"START_DATE\":\"2021-04-24T00:00:00\",\"END_DATE\":\"2021-06-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26976,
//          "TemplateName":"adding rules to locate me and scale because why not - Call Center ",
//          "TemplateNameAr":"مممم يس- ???? ????? ",
//          "TemplateNameEn":"adding rules to locate me and scale because why not - Call Center ",
//          "SurveyName":"adding rules to locate me and scale because why not",
//          "SurveyNameAr":"مممم يس",
//          "SurveyNameEn":"adding rules to locate me and scale because why not",
//          "SRV_ID":8979,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":23346,\"START_DATE\":\"2021-04-21T00:00:00\",\"END_DATE\":\"2021-05-27T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26489,
//          "TemplateName":"test scale on runtime - Call Center ",
//          "TemplateNameAr":"هممم- مركز اتصال ",
//          "TemplateNameEn":"test scale on runtime - Call Center ",
//          "SurveyName":"test scale on runtime",
//          "SurveyNameAr":"هممم",
//          "SurveyNameEn":"test scale on runtime",
//          "SRV_ID":8920,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Closed",
//          "SurveyPeriods":"[{\"ID\":23163,\"START_DATE\":\"2021-04-08T00:00:00\",\"END_DATE\":\"2021-04-22T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26556,
//          "TemplateName":"coding report - Call Center ",
//          "TemplateNameAr":"تقرير كودنج- مركز اتصال ",
//          "TemplateNameEn":"coding report - Call Center ",
//          "SurveyName":"coding report",
//          "SurveyNameAr":"تقرير كودنج",
//          "SurveyNameEn":"coding report",
//          "SRV_ID":8955,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":23272,\"START_DATE\":\"2021-04-19T00:00:00\",\"END_DATE\":\"2021-06-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25618,
//          "TemplateName":"date2 - Call Center ",
//          "TemplateNameAr":"د2- ???? ????? ",
//          "TemplateNameEn":"date2 - Call Center ",
//          "SurveyName":"date2",
//          "SurveyNameAr":"د2",
//          "SurveyNameEn":"date2",
//          "SRV_ID":8811,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22256,\"START_DATE\":\"2021-02-14T00:00:00\",\"END_DATE\":\"2021-05-20T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26128,
//          "TemplateName":"pull unit #2 - Call Center ",
//          "TemplateNameAr":"سحب عينة #2- مركز اتصال ",
//          "TemplateNameEn":"pull unit #2 - Call Center ",
//          "SurveyName":"pull unit #2",
//          "SurveyNameAr":"سحب عينة #2",
//          "SurveyNameEn":"pull unit #2",
//          "SRV_ID":8878,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22862,\"START_DATE\":\"2021-03-21T00:00:00\",\"END_DATE\":\"2021-06-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26229,
//          "TemplateName":"pull unit #3 - Call Center ",
//          "TemplateNameAr":"سحب عينة #3- مركز اتصال ",
//          "TemplateNameEn":"pull unit #3 - Call Center ",
//          "SurveyName":"pull unit #3",
//          "SurveyNameAr":"سحب عينة #3",
//          "SurveyNameEn":"pull unit #3",
//          "SRV_ID":8892,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22941,\"START_DATE\":\"2021-03-30T00:00:00\",\"END_DATE\":\"2021-05-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26074,
//          "TemplateName":"pull unit test  - Call Center ",
//          "TemplateNameAr":"سحب عينة - مركز اتصال ",
//          "TemplateNameEn":"pull unit test  - Call Center ",
//          "SurveyName":"pull unit test ",
//          "SurveyNameAr":"سحب عينة ",
//          "SurveyNameEn":"pull unit test ",
//          "SRV_ID":8868,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22769,\"START_DATE\":\"2021-03-21T00:00:00\",\"END_DATE\":\"2021-06-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26091,
//          "TemplateName":"test 22032021 - Call Center ",
//          "TemplateNameAr":"فحص 0322021- مركز اتصال ",
//          "TemplateNameEn":"test 22032021 - Call Center ",
//          "SurveyName":"test 22032021",
//          "SurveyNameAr":"فحص 0322021",
//          "SurveyNameEn":"test 22032021",
//          "SRV_ID":8871,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22814,\"START_DATE\":\"2021-03-21T00:00:00\",\"END_DATE\":\"2021-03-27T00:00:00\"},{\"ID\":22815,\"START_DATE\":\"2021-03-28T00:00:00\",\"END_DATE\":\"2021-04-03T00:00:00\"},{\"ID\":22816,\"START_DATE\":\"2021-04-04T00:00:00\",\"END_DATE\":\"2021-04-10T00:00:00\"},{\"ID\":22817,\"START_DATE\":\"2021-04-11T00:00:00\",\"END_DATE\":\"2021-04-17T00:00:00\"},{\"ID\":22818,\"START_DATE\":\"2021-04-18T00:00:00\",\"END_DATE\":\"2021-04-24T00:00:00\"},{\"ID\":22819,\"START_DATE\":\"2021-04-25T00:00:00\",\"END_DATE\":\"2021-04-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":26075,
//          "TemplateName":"periods test _ private  - Call Center ",
//          "TemplateNameAr":"فحص الفترات _ خاص- مركز اتصال ",
//          "TemplateNameEn":"periods test _ private  - Call Center ",
//          "SurveyName":"periods test _ private ",
//          "SurveyNameAr":"فحص الفترات _ خاص",
//          "SurveyNameEn":"periods test _ private ",
//          "SRV_ID":8869,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22776,\"START_DATE\":\"2021-03-20T00:00:00\",\"END_DATE\":\"2021-03-26T00:00:00\"},{\"ID\":22777,\"START_DATE\":\"2021-03-27T00:00:00\",\"END_DATE\":\"2021-04-02T00:00:00\"},{\"ID\":22778,\"START_DATE\":\"2021-04-03T00:00:00\",\"END_DATE\":\"2021-04-09T00:00:00\"},{\"ID\":22779,\"START_DATE\":\"2021-04-10T00:00:00\",\"END_DATE\":\"2021-04-16T00:00:00\"},{\"ID\":22780,\"START_DATE\":\"2021-04-17T00:00:00\",\"END_DATE\":\"2021-04-23T00:00:00\"},{\"ID\":22781,\"START_DATE\":\"2021-04-24T00:00:00\",\"END_DATE\":\"2021-04-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25527,
//          "TemplateName":"public survey - Call Center ",
//          "TemplateNameAr":"ببلك سيرفي- مركز اتصال ",
//          "TemplateNameEn":"public survey - Call Center ",
//          "SurveyName":"public survey",
//          "SurveyNameAr":"ببلك سيرفي",
//          "SurveyNameEn":"public survey",
//          "SRV_ID":8799,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22099,\"START_DATE\":\"2021-02-22T00:00:00\",\"END_DATE\":\"2021-05-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25588,
//          "TemplateName":"task_47499 - Call Center ",
//          "TemplateNameAr":"47499- مركز اتصال ",
//          "TemplateNameEn":"task_47499 - Call Center ",
//          "SurveyName":"task_47499",
//          "SurveyNameAr":"47499",
//          "SurveyNameEn":"task_47499",
//          "SRV_ID":8803,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22172,\"START_DATE\":\"2021-02-24T00:00:00\",\"END_DATE\":\"2021-04-22T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25487,
//          "TemplateName":"bug_47353 - Call Center ",
//          "TemplateNameAr":"47353- مركز اتصال ",
//          "TemplateNameEn":"bug_47353 - Call Center ",
//          "SurveyName":"bug_47353",
//          "SurveyNameAr":"47353",
//          "SurveyNameEn":"bug_47353",
//          "SRV_ID":8794,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":22060,\"START_DATE\":\"2021-02-21T00:00:00\",\"END_DATE\":\"2021-03-26T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25167,
//          "TemplateName":"TS 31-1-2021 Template mode  - Call Center ",
//          "TemplateNameAr":"السياحة 31-1-2021 تيملت مود - مركز اتصال ",
//          "TemplateNameEn":"TS 31-1-2021 Template mode  - Call Center ",
//          "SurveyName":"TS 31-1-2021 Template mode ",
//          "SurveyNameAr":"السياحة 31-1-2021 تيملت مود ",
//          "SurveyNameEn":"TS 31-1-2021 Template mode ",
//          "SRV_ID":8752,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21699,\"START_DATE\":\"2021-01-31T00:00:00\",\"END_DATE\":\"2021-04-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25225,
//          "TemplateName":"TS 31-1-2021 Template mode  _ list - Call Center ",
//          "TemplateNameAr":"السياحة 31-1-2021 تيملت مود  _ ليست- مركز اتصال ",
//          "TemplateNameEn":"TS 31-1-2021 Template mode  _ list - Call Center ",
//          "SurveyName":"TS 31-1-2021 Template mode  _ list",
//          "SurveyNameAr":"السياحة 31-1-2021 تيملت مود  _ ليست",
//          "SurveyNameEn":"TS 31-1-2021 Template mode  _ list",
//          "SRV_ID":8755,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21759,\"START_DATE\":\"2021-01-31T00:00:00\",\"END_DATE\":\"2021-04-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25129,
//          "TemplateName":"CC status  - Call Center ",
//          "TemplateNameAr":"كول سنتر حالات - مركز اتصال ",
//          "TemplateNameEn":"CC status  - Call Center ",
//          "SurveyName":"CC status ",
//          "SurveyNameAr":"كول سنتر حالات ",
//          "SurveyNameEn":"CC status ",
//          "SRV_ID":8746,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21640,\"START_DATE\":\"2021-01-25T00:00:00\",\"END_DATE\":\"2021-02-26T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25087,
//          "TemplateName":"test CC completion - Call Center ",
//          "TemplateNameAr":"تست الاكتمال - مركز الاتصال - مركز اتصال ",
//          "TemplateNameEn":"test CC completion - Call Center ",
//          "SurveyName":"test CC completion",
//          "SurveyNameAr":"تست الاكتمال - مركز الاتصال ",
//          "SurveyNameEn":"test CC completion",
//          "SRV_ID":8742,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21599,\"START_DATE\":\"2021-01-23T00:00:00\",\"END_DATE\":\"2021-04-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25067,
//          "TemplateName":" Task 46152 - Call Center ",
//          "TemplateNameAr":"مهمة 46152- مركز اتصال ",
//          "TemplateNameEn":" Task 46152 - Call Center ",
//          "SurveyName":" Task 46152",
//          "SurveyNameAr":"مهمة 46152",
//          "SurveyNameEn":" Task 46152",
//          "SRV_ID":8741,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21579,\"START_DATE\":\"2021-01-22T00:00:00\",\"END_DATE\":\"2021-02-28T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":25047,
//          "TemplateName":"CC sending emails - Call Center ",
//          "TemplateNameAr":"ارسال الايميلات - مركز اتصال ",
//          "TemplateNameEn":"CC sending emails - Call Center ",
//          "SurveyName":"CC sending emails",
//          "SurveyNameAr":"ارسال الايميلات ",
//          "SurveyNameEn":"CC sending emails",
//          "SRV_ID":8739,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21560,\"START_DATE\":\"2021-01-21T00:00:00\",\"END_DATE\":\"2021-05-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24883,
//          "TemplateName":"testing_json - Call Center ",
//          "TemplateNameAr":"22- مركز اتصال ",
//          "TemplateNameEn":"testing_json - Call Center ",
//          "SurveyName":"testing_json",
//          "SurveyNameAr":"22",
//          "SurveyNameEn":"testing_json",
//          "SRV_ID":8716,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":21398,\"START_DATE\":\"2021-01-13T00:00:00\",\"END_DATE\":\"2021-01-15T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24405,
//          "TemplateName":"Coding List level test - Call Center ",
//          "TemplateNameAr":"اختبار مستوى قائمة الترميز- مركز اتصال ",
//          "TemplateNameEn":"Coding List level test - Call Center ",
//          "SurveyName":"Coding List level test",
//          "SurveyNameAr":"اختبار مستوى قائمة الترميز",
//          "SurveyNameEn":"Coding List level test",
//          "SRV_ID":8572,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":20628,\"START_DATE\":\"2020-12-20T00:00:00\",\"END_DATE\":\"2021-02-27T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24314,
//          "TemplateName":"Labor Force - matrix case  - Call Center ",
//          "TemplateNameAr":"قوى عاملة - تست ماتركس- مركز اتصال ",
//          "TemplateNameEn":"Labor Force - matrix case  - Call Center ",
//          "SurveyName":"Labor Force - matrix case ",
//          "SurveyNameAr":"قوى عاملة - تست ماتركس",
//          "SurveyNameEn":"Labor Force - matrix case ",
//          "SRV_ID":8550,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":20538,\"START_DATE\":\"2020-12-14T00:00:00\",\"END_DATE\":\"2020-12-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24235,
//          "TemplateName":"deez - Call Center ",
//          "TemplateNameAr":"يييئ- مركز اتصال ",
//          "TemplateNameEn":"deez - Call Center ",
//          "SurveyName":"deez",
//          "SurveyNameAr":"يييئ",
//          "SurveyNameEn":"deez",
//          "SRV_ID":8535,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":20479,\"START_DATE\":\"2020-12-09T00:00:00\",\"END_DATE\":\"2020-12-09T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24167,
//          "TemplateName":"iframe  - Call Center ",
//          "TemplateNameAr":"اي فريم- مركز اتصال ",
//          "TemplateNameEn":"iframe  - Call Center ",
//          "SurveyName":"iframe  _ Copy",
//          "SurveyNameAr":"اي فريم _ نسخة",
//          "SurveyNameEn":"iframe  _ Copy",
//          "SRV_ID":8527,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":20398,\"START_DATE\":\"2020-12-03T00:00:00\",\"END_DATE\":\"2020-12-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":24098,
//          "TemplateName":"call canter 2911 - Call Center ",
//          "TemplateNameAr":"كول سنتر 2911- مركز اتصال ",
//          "TemplateNameEn":"call canter 2911 - Call Center ",
//          "SurveyName":"call canter 2911",
//          "SurveyNameAr":"كول سنتر 2911",
//          "SurveyNameEn":"call canter 2911",
//          "SRV_ID":8507,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":7165,\"START_DATE\":\"2020-11-29T00:00:00\",\"END_DATE\":\"2021-01-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":23938,
//          "TemplateName":"Pull units - other groups  - Call Center ",
//          "TemplateNameAr":"سحب عينات - جروبات مختلفة - مركز اتصال ",
//          "TemplateNameEn":"Pull units - other groups  - Call Center ",
//          "SurveyName":"Pull units - other groups ",
//          "SurveyNameAr":"سحب عينات - جروبات مختلفة ",
//          "SurveyNameEn":"Pull units - other groups ",
//          "SRV_ID":8472,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":7139,\"START_DATE\":\"2020-11-19T00:00:00\",\"END_DATE\":\"2021-01-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":23316,
//          "TemplateName":"template mode 2709 - CC permission  - Call Center ",
//          "TemplateNameAr":"تيمبليت مود - مركز اتصال ",
//          "TemplateNameEn":"template mode 2709 - CC permission  - Call Center ",
//          "SurveyName":"template mode 2709 - CC permission ",
//          "SurveyNameAr":"تيمبليت مود ",
//          "SurveyNameEn":"template mode 2709 - CC permission ",
//          "SRV_ID":8336,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6604,\"START_DATE\":\"2020-09-27T00:00:00\",\"END_DATE\":\"2021-02-27T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":23207,
//          "TemplateName":"regression 1709 - Call Center ",
//          "TemplateNameAr":"ريجريشن 1709- مركز اتصال ",
//          "TemplateNameEn":"regression 1709 - Call Center ",
//          "SurveyName":"regression 1709",
//          "SurveyNameAr":"ريجريشن 1709",
//          "SurveyNameEn":"regression 1709",
//          "SRV_ID":8314,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6497,\"START_DATE\":\"2020-09-17T00:00:00\",\"END_DATE\":\"2020-09-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":23054,
//          "TemplateName":"Call Unit - Runtime - Call Center ",
//          "TemplateNameAr":"سحب العينات - مركز اتصال ",
//          "TemplateNameEn":"Call Unit - Runtime - Call Center ",
//          "SurveyName":"Call Unit - Runtime",
//          "SurveyNameAr":"سحب العينات ",
//          "SurveyNameEn":"Call Unit - Runtime",
//          "SRV_ID":8267,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6450,\"START_DATE\":\"2020-09-07T00:00:00\",\"END_DATE\":\"2020-09-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":22915,
//          "TemplateName":"test alaa - Call Center ",
//          "TemplateNameAr":"الاء تست- مركز اتصال ",
//          "TemplateNameEn":"test alaa - Call Center ",
//          "SurveyName":"test alaa",
//          "SurveyNameAr":"الاء تست",
//          "SurveyNameEn":"test alaa",
//          "SRV_ID":8244,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6427,\"START_DATE\":\"2020-08-31T00:00:00\",\"END_DATE\":\"2021-01-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":22896,
//          "TemplateName":"30-8 1 - Call Center ",
//          "TemplateNameAr":"30-8 1- مركز اتصال ",
//          "TemplateNameEn":"30-8 1 - Call Center ",
//          "SurveyName":"30-8 1",
//          "SurveyNameAr":"30-8 1",
//          "SurveyNameEn":"30-8 1",
//          "SRV_ID":8241,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6407,\"START_DATE\":\"2020-08-30T00:00:00\",\"END_DATE\":\"2020-09-05T00:00:00\"},{\"ID\":6408,\"START_DATE\":\"2020-09-06T00:00:00\",\"END_DATE\":\"2020-09-12T00:00:00\"},{\"ID\":6409,\"START_DATE\":\"2020-09-13T00:00:00\",\"END_DATE\":\"2020-09-19T00:00:00\"},{\"ID\":6410,\"START_DATE\":\"2020-09-20T00:00:00\",\"END_DATE\":\"2020-09-26T00:00:00\"},{\"ID\":6411,\"START_DATE\":\"2020-09-27T00:00:00\",\"END_DATE\":\"2020-10-03T00:00:00\"},{\"ID\":6412,\"START_DATE\":\"2020-10-04T00:00:00\",\"END_DATE\":\"2020-10-10T00:00:00\"},{\"ID\":6413,\"START_DATE\":\"2020-10-11T00:00:00\",\"END_DATE\":\"2020-10-17T00:00:00\"},{\"ID\":6414,\"START_DATE\":\"2020-10-18T00:00:00\",\"END_DATE\":\"2020-10-24T00:00:00\"},{\"ID\":6415,\"START_DATE\":\"2020-10-25T00:00:00\",\"END_DATE\":\"2020-10-31T00:00:00\"},{\"ID\":6416,\"START_DATE\":\"2020-11-01T00:00:00\",\"END_DATE\":\"2020-11-07T00:00:00\"},{\"ID\":6417,\"START_DATE\":\"2020-11-08T00:00:00\",\"END_DATE\":\"2020-11-14T00:00:00\"},{\"ID\":6418,\"START_DATE\":\"2020-11-15T00:00:00\",\"END_DATE\":\"2020-11-21T00:00:00\"},{\"ID\":6419,\"START_DATE\":\"2020-11-22T00:00:00\",\"END_DATE\":\"2020-11-28T00:00:00\"},{\"ID\":6420,\"START_DATE\":\"2020-11-29T00:00:00\",\"END_DATE\":\"2020-12-05T00:00:00\"},{\"ID\":6421,\"START_DATE\":\"2020-12-06T00:00:00\",\"END_DATE\":\"2020-12-12T00:00:00\"},{\"ID\":6422,\"START_DATE\":\"2020-12-13T00:00:00\",\"END_DATE\":\"2020-12-19T00:00:00\"},{\"ID\":6423,\"START_DATE\":\"2020-12-20T00:00:00\",\"END_DATE\":\"2020-12-26T00:00:00\"},{\"ID\":6424,\"START_DATE\":\"2020-12-27T00:00:00\",\"END_DATE\":\"2020-12-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21957,
//          "TemplateName":"email test survey - Call Center ",
//          "TemplateNameAr":"ايميل تست - مركز اتصال ",
//          "TemplateNameEn":"email test survey - Call Center ",
//          "SurveyName":"email test survey",
//          "SurveyNameAr":"ايميل تست ",
//          "SurveyNameEn":"email test survey",
//          "SRV_ID":7998,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6117,\"START_DATE\":\"2020-06-28T00:00:00\",\"END_DATE\":\"2020-10-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21661,
//          "TemplateName":"test 1506 - Call Center ",
//          "TemplateNameAr":"15-6- مركز اتصال ",
//          "TemplateNameEn":"test 1506 - Call Center ",
//          "SurveyName":"test 1506",
//          "SurveyNameAr":"15-6",
//          "SurveyNameEn":"test 1506",
//          "SRV_ID":7892,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":6011,\"START_DATE\":\"2020-06-15T00:00:00\",\"END_DATE\":\"2020-09-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":21472,
//          "TemplateName":"edit published survey - Call Center ",
//          "TemplateNameAr":"تعديل استمارة منشورة- مركز اتصال ",
//          "TemplateNameEn":"edit published survey - Call Center ",
//          "SurveyName":"edit published survey",
//          "SurveyNameAr":"تعديل استمارة منشورة",
//          "SurveyNameEn":"edit published survey",
//          "SRV_ID":7823,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5933,\"START_DATE\":\"2020-06-01T00:00:00\",\"END_DATE\":\"2020-08-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20772,
//          "TemplateName":"weblink pull  - Call Center ",
//          "TemplateNameAr":"سحب ويب لينك- مركز اتصال ",
//          "TemplateNameEn":"weblink pull  - Call Center ",
//          "SurveyName":"weblink pull ",
//          "SurveyNameAr":"سحب ويب لينك",
//          "SurveyNameEn":"weblink pull ",
//          "SRV_ID":7615,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5721,\"START_DATE\":\"2020-04-27T00:00:00\",\"END_DATE\":\"2021-03-31T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20711,
//          "TemplateName":"test 26-4 - Call Center ",
//          "TemplateNameAr":"فحص 26-4- مركز اتصال ",
//          "TemplateNameEn":"test 26-4 - Call Center ",
//          "SurveyName":"test 26-4",
//          "SurveyNameAr":"فحص 26-4",
//          "SurveyNameEn":"test 26-4",
//          "SRV_ID":7605,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5711,\"START_DATE\":\"2020-04-26T00:00:00\",\"END_DATE\":\"2020-06-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20691,
//          "TemplateName":"pull units & tasks - Call Center ",
//          "TemplateNameAr":"سحب العينة والوظائف - مركز اتصال ",
//          "TemplateNameEn":"pull units & tasks - Call Center ",
//          "SurveyName":"pull units & tasks",
//          "SurveyNameAr":"سحب العينة والوظائف ",
//          "SurveyNameEn":"pull units & tasks",
//          "SRV_ID":7603,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5709,\"START_DATE\":\"2020-04-25T00:00:00\",\"END_DATE\":\"2020-06-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20491,
//          "TemplateName":"Population Survey - Call Center ",
//          "TemplateNameAr":"مسح السكان- مركز اتصال ",
//          "TemplateNameEn":"Population Survey - Call Center ",
//          "SurveyName":"Population Survey",
//          "SurveyNameAr":"مسح السكان",
//          "SurveyNameEn":"Population Survey",
//          "SRV_ID":7573,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5678,\"START_DATE\":\"2020-04-06T00:00:00\",\"END_DATE\":\"2020-10-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20383,
//          "TemplateName":"Queue definition survey  - Call Center ",
//          "TemplateNameAr":"استمارة تعريف طوابير- مركز اتصال ",
//          "TemplateNameEn":"Queue definition survey  - Call Center ",
//          "SurveyName":"Queue definition survey ",
//          "SurveyNameAr":"استمارة تعريف طوابير",
//          "SurveyNameEn":"Queue definition survey ",
//          "SRV_ID":7542,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5640,\"START_DATE\":\"2020-04-06T00:00:00\",\"END_DATE\":\"2020-04-30T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20458,
//          "TemplateName":"test call center 3 - Call Center ",
//          "TemplateNameAr":"فحص مركز الاتصال 3- مركز اتصال ",
//          "TemplateNameEn":"test call center 3 - Call Center ",
//          "SurveyName":"test call center 3",
//          "SurveyNameAr":"فحص مركز الاتصال 3",
//          "SurveyNameEn":"test call center 3",
//          "SRV_ID":7566,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5671,\"START_DATE\":\"2020-04-12T00:00:00\",\"END_DATE\":\"2020-04-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20455,
//          "TemplateName":"call center 2  - Call Center ",
//          "TemplateNameAr":"فحص مركز اتصال 2- مركز اتصال ",
//          "TemplateNameEn":"call center 2  - Call Center ",
//          "SurveyName":"call center 2 ",
//          "SurveyNameAr":"فحص مركز اتصال 2",
//          "SurveyNameEn":"call center 2 ",
//          "SRV_ID":7565,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5670,\"START_DATE\":\"2020-04-12T00:00:00\",\"END_DATE\":\"2020-04-29T00:00:00\"}]"
//       },
//       {
//          "TEMPLATE_ID":20414,
//          "TemplateName":"Call Center test - Call Center ",
//          "TemplateNameAr":"فحص مركز اتصال- مركز اتصال ",
//          "TemplateNameEn":"Call Center test - Call Center ",
//          "SurveyName":"Call Center test",
//          "SurveyNameAr":"فحص مركز اتصال",
//          "SurveyNameEn":"Call Center test",
//          "SRV_ID":7559,
//          "SystemType":3,
//          "SURVEY_STATUS_AR":"منتهية",
//          "SURVEY_STATUS_EN":"Expired",
//          "SurveyPeriods":"[{\"ID\":5664,\"START_DATE\":\"2020-04-06T00:00:00\",\"END_DATE\":\"2020-04-29T00:00:00\"}]"
//       }
   
// ]];

   dataJson!:any[];
 


   // setType(type:string){
   //    this.type=type;
   // }

   setData(data:any[]){
      this.dataJson=data;
      console.log(this.dataJson)

   }
  getData(typeString: string){


      //console.log('getData:::', this.type)

     if (typeString==="Published") {
        let type=this.dataJson[0].filter((type:any)=>type.SURVEY_STATUS_EN==='Published');
      return type;

     }

     else if(typeString==="Expired"){
      let type=this.dataJson[0].filter((type:any)=>type.SURVEY_STATUS_EN==='Expired');
      return type;

     } 
     else if (typeString==="Closed") {
      let type=this.dataJson[0].filter((type:any)=>type.SURVEY_STATUS_EN==='Closed');
      return type;

     }
     else
    return [...this.dataJson[0]];
  }

  getDataById(){
     let survay=this.dataJson[0].filter((survay:any)=>survay.TEMPLATE_ID===this.slectedCard)
   return survay

   }



  searchByName(key:string,type:string){

   let arr=[]
   let temp;
   for(let x of this.dataJson[0]){
      temp=x.SurveyNameEn.toLowerCase()
      if(type=='All Surveys' && temp.includes(key.toLowerCase())){
         arr.push(x);
      }else
      if (temp.includes(key.toLowerCase()) && type== x.SURVEY_STATUS_EN) {
         arr.push(x);
      }
   }
   return arr;
  }

  searchByDate(start:any,end:any,type:string){


      let startSearch=Date.parse(start);
      let endSearch=Date.parse(end);
   
      let arr=[];
      let startDate;
      let endDate;
      
      for(let x of this.dataJson[0]){

         if ( x.SurveyPeriods) {
            
            startDate=Date.parse(JSON.parse(x.SurveyPeriods)[0].START_DATE);
            endDate=Date.parse(JSON.parse(x.SurveyPeriods)[0].END_DATE);

            
            if(type=='All Surveys' 
            && startDate >=startSearch && 
            endDate <=endSearch )
                  {
                    arr.push(x);
                 }else

        if (type== x.SURVEY_STATUS_EN 
               && startDate >=startSearch && 
               endDate <=endSearch ) 
                    {
                       arr.push(x);
                    }
                 }

         }
        
      return arr;
   
  }


//   convertDate(startDate:any){

//    let start = Date.parse(startDate);
//    var date = new Date(start);
//    let month=date.getMonth()+1;
//    let finalstart=date.getDate()+'/'+month+'/'+date.getFullYear();
   
   
//    return finalstart.toString();
//  }

//  convertedEnd(endDate:any){
//    let end = Date.parse(endDate);
//    var date = new Date(end);
//    let monthEnd=date.getMonth()+1;
//    let finalEnd=date.getDate()+'/'+monthEnd+'/'+date.getFullYear();
   
//    return finalEnd.toString();
//  }


 editSurvayName(id:string,newName:string){
    for(let x of this.dataJson[0] ){
       if (x.TEMPLATE_ID==id) {
          x.SurveyNameEn=newName
          return;
       }
    }
 }


  }
