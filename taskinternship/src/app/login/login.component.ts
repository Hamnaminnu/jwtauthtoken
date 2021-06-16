import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={
    email:'',
    password:''
  }
  constructor(private ProfileService : ProfileService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  check()
  {    
    this.ProfileService.newusercheck(this.login).subscribe(
      res =>  {
      console.log(res);
      { if(res.message =="Success"){
        localStorage.setItem('usertoken', res.usertoken);
        let id = res.id;
        console.log(id);
        this.router.navigate(['profile/:'+id]);
      }
       if(res.message =="Failed"){
        this.router.navigate(['login']);
        alert('invalid username or password');
      }
    }
    })
   }    
}
