import { Component } from '@angular/core';
import { MandiService } from '../Services/mandi.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor(private service:MandiService,private router:Router){

  }

  username:string = "";
  password:string = "";
  responseMessage:string = "";

  ngOnInit(){
    
  }

  login(username:string,password:string){
    console.log(username + " " + password);
    if(username=="devarshi" && password == "12345"){
      this.router.navigate(["/home"]);
    }
    else{
      this.responseMessage = "Invalide credentials";
    }

  }


}
