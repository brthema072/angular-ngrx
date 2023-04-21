import { Component } from '@angular/core';
import { IAppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementCounter, incrementCounter } from './store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<{ app: IAppState }>){
  }

  counter$ = this.store.select('app').pipe(map(app => app.counter));

  increment(){
    this.store.dispatch(incrementCounter())
  }

  decrement(){
    this.store.dispatch(decrementCounter())
  }

}
