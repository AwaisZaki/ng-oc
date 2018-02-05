import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin: boolean=false;
  constructor() { 
    
  }



  ngOnInit() {


  }

  login(e){
    e.preventDefault();
    this.showLogin = true;
  }

}
