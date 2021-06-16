import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User={
    firstname:'',
    lastname:'',
    email:'',
    number:'',
    city:'',
    pincode:'',
    state:'',
    password:'',
    date:''
  }
  constructor(private ProfileService : ProfileService,private router : Router) { }

  ngOnInit(): void {
  }
  Adddata()
  {    
    this.ProfileService.newRegisterdata(this.User);
    console.log("Called");    
    this.router.navigate(['/login']);
  }
}
