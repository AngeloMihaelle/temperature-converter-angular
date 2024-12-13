import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TemperatureConverterComponent } from './app/temperature-converter/temperature-converter.component';

bootstrapApplication(AppComponent, {
  providers: [],
}).catch(err => console.error(err));
