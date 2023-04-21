import { Component } from '@angular/core';
import { IAppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<{ app: IAppState }>){
  }

  counter$ = this.store.select('app').pipe(map(select => select.counter));

  increment(){
    // this.counter += 1
  }

  decrement(){
    // this.counter -= 1
  }

}
