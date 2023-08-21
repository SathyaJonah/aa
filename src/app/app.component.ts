import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = 'Hi Welcome to Angular!';

  showMessage() {
    alert(this.message);
  }
}


