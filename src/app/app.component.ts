import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  monAge = 65465;

  rigoler(): void {
    console.log("je rigole...");
    this.name = "je rigole!!";
  }
}
