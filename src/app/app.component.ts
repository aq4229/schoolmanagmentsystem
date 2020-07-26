import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class AppComponent {
  title = 'md';
  selectedDate;
  headElements = ['#', 'First', 'Last', 'Handle'];
  elements = [{id: 1, first: 'Mark', last: 'Jacob', handle: '@mdo'}];



}
