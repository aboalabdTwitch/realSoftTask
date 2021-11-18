import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;

  constructor(private data:DataService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  submit(){
    if(this.username && this.password)
    {
      let user={"username":this.username,"password":this.password};
      this.data.login(user).subscribe(res=>{
        let resToStrin=JSON.stringify(res);
        //console.log(JSON.parse(resToStrin).data[0].role);
        if (JSON.parse(resToStrin).status=="found") {
          this.router.navigate(['/main']);
          localStorage.setItem('token',"fdsgnslngosnfpdsnfbosjbgdkslngsjbfodsngsd");
          this.data.setInfo(JSON.parse(resToStrin).data[0].role,JSON.parse(resToStrin).data[0].username)
        }else{
          this.toastr.warning('Username or password wrong');
        }
      });
    }else{
      this.toastr.warning('Username or password Empty ');
    }
    
  }

}
