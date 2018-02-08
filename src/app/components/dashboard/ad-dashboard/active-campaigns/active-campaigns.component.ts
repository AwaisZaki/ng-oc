import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-active-campaigns',
  templateUrl: './active-campaigns.component.html',
  styleUrls: ['./active-campaigns.component.scss']
})
export class ActiveCampaignsComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }



  
  dataTable= [
    {
      name: "awais",
      type: "like",
      status: "active"
    },
    {
      name: "awais",
      type: "like",
      status: "active"
    }
  ]

  

  constructor() {
 

    
  }

  ngOnInit() {


    
   
  }
   
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  
 
];
