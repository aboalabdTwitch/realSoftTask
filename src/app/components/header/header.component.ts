import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any;
  firstName!:string;
  lastName!:string;
  name:any;
  curData:any;
 constructor( private route: ActivatedRoute, private data:DataService,private path:Router){
  
  if(!this.data.isLoggedIn()){
    this.path.navigate(["login"]);
  }
 }

 ngOnInit(){
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
  this.user=this.data.username;
  this.splitFun();

  this.data.getData2().subscribe(data=>this.curData=data);

  //this.user=localStorage.getItem('username');


 }

 splitFun(){
  let name=this.user.split(' ');
  this.firstName=name[0].charAt(0).toLocaleUpperCase();
  this.lastName=name[1].charAt(0).toUpperCase();
}



}
