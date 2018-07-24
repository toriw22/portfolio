import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  show: boolean = false;
  
  title: string = "Portfolio";

  constructor() { }

  ngOnInit() {
  }


}
