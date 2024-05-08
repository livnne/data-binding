import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  appName="This is an interpolation example!"
  clientName="Lianne";
  appliedCSSClass="green";
  notappliedCSSClass = true;
  myColor = "red";

  showData($event:any) {
    console.log("Button clicked!");
  }
}
