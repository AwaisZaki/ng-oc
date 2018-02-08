import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-my-account',
  templateUrl: './ad-my-account.component.html',
  styleUrls: ['./ad-my-account.component.scss']
})
export class AdMyAccountComponent implements OnInit {

  heading: String =  "My Account";
  constructor() { }

  ngOnInit() {
  }

}
