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

   url='http://localhost:3000/'

   role!:string;
   username!:string;
   
//   url='https://shielded-badlands-14846.herokuapp.com/'

   //url='https://jsonplaceholder.typicode.com/users'


  constructor(private http :HttpClient) { }

  setInfo(role:string,username:string){
     this.role=role;
     this.username=username;

  }

  isLoggedIn(){
     return !!localStorage.getItem('token');
  }

  getrole(){
     return localStorage.getItem('role');
  }

  login(user:any){
     return this.http.post(this.url+"login",user);
  }


  getData2(){
     return this.http.get(this.url+'surveys');

  }

  updateSurveyName(id:string,body:any){
    return this.http.put(this.url+'update/'+id,body)
  }

  deleteSurvey(id:string){
     return this.http.delete(this.url+'delete/'+id)

  }

  addSurvey(survey:any){
     return this.http.post(this.url+'add',survey)
  }

   dataJson!:any[];
 


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

//  deleteSurvey(id:string){
//     let newData=[];
//     let arrayOfNewData=[];
//     for(let survey of this.dataJson[0] )
//     {
//       if (survey.TEMPLATE_ID!=id) 
//       {
//          newData.push(survey);
//       }

//     }
//     arrayOfNewData.push(newData);
//     this.dataJson=arrayOfNewData;

//  }


  }

