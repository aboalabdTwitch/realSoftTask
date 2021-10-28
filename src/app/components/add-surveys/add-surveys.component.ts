import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-surveys',
  templateUrl: './add-surveys.component.html',
  styleUrls: ['./add-surveys.component.css']
})
export class AddSurveysComponent implements OnInit {
  // frmSignup!: FormGroup;
  surveyName!:string;
  surveyStatus!:string;
  surveyId!:string;


  constructor(private surveys:DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit(){
    let survey={"TEMPLATE_ID":this.surveyId,
    "TemplateName":"Rank test #3 - Call Center ",
    "TemplateNameAr":"رانك تست #3-  مركز اتصال ",
    "TemplateNameEn":"Rank test #3 - Call Center ",
    "SurveyName":"Rank test #3",
    "SurveyNameAr":"رانك تست #3",
    "SurveyNameEn":this.surveyName,
    "SRV_ID":9129,"SystemType":3,
    "SURVEY_STATUS_AR":"منشورة",
    "SURVEY_STATUS_EN":this.surveyStatus,
    "SurveyPeriods":"[{\"ID\":25229,\"START_DATE\":\"2021-06-09T00:00:00\",\"END_DATE\":\"2021-09-30T00:00:00\"}]"}

    this.surveys.addSurvey(survey).subscribe()
    this.toastr.success('Surveys has been added');

    console.log(survey);
  }

}
