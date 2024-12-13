import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like *ngIf
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css'],
  standalone: true,  // Mark as standalone component
  imports: [CommonModule, FormsModule]
})
export class TemperatureConverterComponent {
  inputTemperature: number | null = null;
  inputScale: string = 'C';
  outputScale: string = 'F';
  result: string | null = null;

  convertTemperature(): void {
    if (this.inputTemperature === null || isNaN(this.inputTemperature)) {
      this.result = 'Por favor, ingrese un número válido.';
      return;
    }

    let result: number = 0; // Inicializar con un valor predeterminado
    const input = this.inputTemperature;

    if (this.inputScale === 'C') {
      if (this.outputScale === 'F') {
        result = (input * 9 / 5) + 32;
      } else if (this.outputScale === 'K') {
        result = input + 273.15;
      } else {
        result = input;
      }
    } else if (this.inputScale === 'F') {
      if (this.outputScale === 'C') {
        result = (input - 32) * 5 / 9;
      } else if (this.outputScale === 'K') {
        result = (input - 32) * 5 / 9 + 273.15;
      } else {
        result = input;
      }
    } else if (this.inputScale === 'K') {
      if (this.outputScale === 'C') {
        result = input - 273.15;
      } else if (this.outputScale === 'F') {
        result = (input - 273.15) * 9 / 5 + 32;
      } else {
        result = input;
      }
    }

    this.result = `${result.toFixed(2)} °${this.outputScale}`;
  }
}
