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
      state('turnOut', style({ transform: 'rotate(-45deg) translateX(-70%) translateY(-60%)' })),
      transition('default => turnOut', animate('800ms ease-out' )),
      transition('turnOut => default', animate('800ms ease-out' )),
    ]),
    trigger('displayState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('disappear', style({ transform: 'translateX(-160%) translateY(-230%)' })),
      transition('default => disappear', animate('800ms ease-out')),
      transition('disappear => default', animate('800ms ease-out')),
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

  hideLeft() {
    this.state = (this.state === 'default' ? 'disappear' : 'default' );
  }


}
