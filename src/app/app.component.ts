import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-passing';

  seasons:Array<string> = ["winter", "spring", "summer", "autumn"];
  selected: string = "seasons"
}
