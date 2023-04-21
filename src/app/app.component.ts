import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngrx';


  counter: number = 0

  increment(){
    this.counter += 1
  }

  decrement(){
    this.counter -= 1
  }

}
