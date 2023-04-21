import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.scss']
})
export class CounterBoxComponent {

  constructor(private store: Store<{ app: IAppState }>){
  }

  counter$ = this.store.select('app').pipe(map(app => app.counter))
}
