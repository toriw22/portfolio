import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rollLeft', style({ transform: 'rotate(-90deg) translateY(-114%)' })),
      state('goCrazy', style({ transform: 'rotate(-360deg)' })),
      transition('* => *', animate('800ms ease-out' ))
    ]),
    trigger('hiddenState', [
      state('show', style({ opacity: 0 })),
      state('hide', style({ opacity: 1 })),
      transition('* => *', animate('800ms ease-out' ))
    ]),
  ]
})
export class AppComponent {
  state: string = 'default';
  
  rotate() {
    this.state = (this.state === 'default' ? 'rollLeft' : 'rollLeft' );
    // this.state = (this.state === 'show' ? 'hide' : 'hide' );
  }

  reset() {
    this.state = (this.state === 'rollLeft' ? 'default' : 'default' );
    // this.state = (this.state === 'hide' ? 'show' : 'show' );
  }

  tooMuchSpin() {
    this.state = (this.state === 'default' ? 'goCrazy' : 'default' );
  }

}
