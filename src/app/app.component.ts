import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Directives Example</h1>

    <!-- NgSwitch Example -->
    <div [ngSwitch]="choice">
      <p *ngSwitchCase="'A'">You selected Option A</p>
      <p *ngSwitchCase="'B'">You selected Option B</p>
      <p *ngSwitchDefault>Select an option</p>
    </div>

    <!-- NgIf Example -->
    <button (click)="toggleContent()">Toggle Content</button>
    <div *ngIf="showContent">
      <p>This content is shown using NgIf.</p>
    </div>

    <!-- NgFor Example -->
    <h2>Items List:</h2>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class AppComponent {
  choice: string = 'A';
  showContent: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  toggleContent() {
    this.showContent = !this.showContent;
  }
}