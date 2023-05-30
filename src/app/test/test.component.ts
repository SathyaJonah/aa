import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  text: any;
  button(){
    console.log("Button");
    this.text="FST - Angular"
    }

}
