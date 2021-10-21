import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  survayId!:string;
  survayName!:string;
  surInfo:any;



  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private survay:DataService,private toastr: ToastrService) { }

    ngOnInit(){
      this.surInfo=this.survay.getDataById();
      this.survayName=this.surInfo[0].SurveyNameEn;
      this.survayId=this.surInfo[0].TEMPLATE_ID;

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEditedInfo(){
    this.survay.editSurvayName(this.survayId,this.survayName);
    this.onNoClick();
    this.toastr.success('Survay Name','Survey Name has been changed ');
  }


}
