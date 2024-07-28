import { Component } from '@angular/core';
import { MandiService } from '../Services/mandi.service';
import { Router } from 'express';

// import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:MandiService,private router:Router){

  }

  username:string = "";
  password:string = "";
  responseMessage:string = "";

  ngOnInit(){
    
  }

  login(username:string,password:string){
    if(username=="devarshi" && password == "12345"){
      // this.router.navigate(["/mandi-rates"]);
    }
    else{
      this.responseMessage = "Invalide credentials";
    }

  }

}
