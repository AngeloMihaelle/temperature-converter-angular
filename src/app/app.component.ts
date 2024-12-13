import { Component } from '@angular/core';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark as standalone component
  imports: [TemperatureConverterComponent, RouterModule]  // Import other standalone components here

})
export class AppComponent {
  title = 'temperature-converter';
}
