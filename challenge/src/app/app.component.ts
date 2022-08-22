import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onomatopoeias: string[] = [];

  onReceiveNewOnomatopia(newOnomatopeia: string) {
    this.onomatopoeias.push(newOnomatopeia);
  }
}


