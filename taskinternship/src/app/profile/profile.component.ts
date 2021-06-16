import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiledata:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileService : ProfileService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
     
     var id = params.get("id");
    //   alert(this.id);
    console.log(id);
      this.ProfileService.getdata(id)
      .subscribe(data => {
      this.profiledata = data;
      
    });
       
   });
  }

}
