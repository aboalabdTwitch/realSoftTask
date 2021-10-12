import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  filteredData!:any[];
  type:string='Published';

  testAny!:any;


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.filteredData=this.data.getData();
  }

  typeOfSurvey(type:any){
    this.type=type.tab.textLabel;
    this.data.setType(type.tab.textLabel);
    this.filteredData=this.data.getData();
  }

  itemSelected(){
    
    console.log(this.testAny)
  }

}



