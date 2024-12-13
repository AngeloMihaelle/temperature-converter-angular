import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

@NgModule({
  imports: [BrowserModule], // Import BrowserModule for browser-related functionality
  providers: [],
  bootstrap: [] // Remove bootstrap here since you're bootstrapping in main.ts
})
export class AppModule {}
