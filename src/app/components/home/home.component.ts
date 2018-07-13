import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('turnOut', style({ transform: 'rotate(-54deg) translateX(-60%) translateY(-85%)' })),
      transition('default => turnOut', animate('800ms ease-out' )),
      transition('turnOut => default', animate('800ms ease-out' )),
    ]),

  ]

})
export class HomeComponent implements OnInit {

  state: string = "default";
  constructor() { }

  ngOnInit() {
  }

 

  rotate() {
    this.state = (this.state === 'default' ? 'turnOut' : 'default' );
  }



}
