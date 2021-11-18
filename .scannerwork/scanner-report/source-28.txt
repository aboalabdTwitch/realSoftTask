import { Component, Input, OnInit,OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges {

  dataSource:any;
  displayedColumns: string[] = ['position', 'name', 'from', 'to'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() type:string="Published";
  @Input() filteredData2!:any;

 
  constructor(private data :DataService) { }

  ngOnInit(): void {
  this.dataSource = new MatTableDataSource(this.filteredData2);
  }

  ngOnChanges(): void{
    this.dataSource = new MatTableDataSource(this.filteredData2);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }






  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  convertToJson(date:any){
    if(typeof date!=='undefined' && date != null){
      return JSON.parse(date);
  }else return false
  }

  getValue(data:any){
    this.data.slectedCard=data
  }

 
 
}
