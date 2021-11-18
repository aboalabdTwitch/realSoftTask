import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user='Sami Jaber';
  firstName!:string;
  lastName!:string;
  name:any;
  curData:any;
 constructor( private route: ActivatedRoute, private data:DataService){
  this.splitFun();
 }

 ngOnInit(){
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });

  this.data.getData2().subscribe(data=>this.curData=data)


 }

 splitFun(){
  let name=this.user.split(' ');
  this.firstName=name[0].charAt(0).toLocaleUpperCase();
  this.lastName=name[1].charAt(0).toUpperCase();
}



}
