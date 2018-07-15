import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('turnOut', style({ transform: 'rotate(-90deg) translateY(-114%)' })),
      transition('default => turnOut', animate('800ms ease-out' )),
      transition('turnOut => default', animate('800ms ease-out' )),
    ]),

  ]
})
export class AppComponent {
  state: string = "default";

  
  rotate() {
    this.state = (this.state === 'default' ? 'turnOut' : 'default' );
  }

}
