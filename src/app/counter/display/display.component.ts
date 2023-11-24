import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  public counter: number = 0;
  public message: string = 'Hello world :';
  public counterTick(message: string) {
    this.message = message;
    this.counter++;
  }
}
