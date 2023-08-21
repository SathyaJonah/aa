import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomUpperCasePipe } from './custom-upper-case.pipe'; // Import the custom pipe

@NgModule({
  declarations: [
    AppComponent,
    CustomUpperCasePipe // Register the custom pipe here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }