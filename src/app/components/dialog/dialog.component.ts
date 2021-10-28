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

  surveyId!:string;
  surveyName!:string;
  surInfo:any;

  adminflag:boolean=false;


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private survey:DataService,private toastr: ToastrService) { }

    ngOnInit(){
      this.surInfo=this.survey.getDataById();
      this.surveyName=this.surInfo[0].SurveyNameEn;
      this.surveyId=this.surInfo[0].TEMPLATE_ID;


      if(this.survey.role=="admin"){
        this.adminflag=true;
      }

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEditedInfo(){
    this.survey
    .updateSurveyName(this.surveyId,{'name':this.surveyName})
          .subscribe(data=>data)

    this.survey.editSurvayName(this.surveyId,this.surveyName);
    this.onNoClick();
    this.toastr.success('Survey Name','Survey Name has been changed');
  }

  deleteSurvey(){
    this.survey.deleteSurvey(this.surveyId).subscribe();
    location.reload();
    this.onNoClick();
    this.toastr.success('Surveys has been deleted');


  }


}
