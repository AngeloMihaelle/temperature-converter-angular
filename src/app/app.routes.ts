import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

export const routes: Routes = [
  { path: '', component: TemperatureConverterComponent } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
