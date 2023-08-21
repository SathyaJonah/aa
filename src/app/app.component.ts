import { Component } from '@angular/core';
import { CustomUpperCasePipe } from './custom-upper-case.pipe'; // Import your custom pipe

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  message = 'Hello Welcome to Angular';

  // Register custom pipe
  customUpperCasePipe = new CustomUpperCasePipe();
}