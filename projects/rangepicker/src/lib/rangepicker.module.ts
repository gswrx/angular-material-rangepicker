import { NgModule } from '@angular/core';
import { RangepickerComponent } from './rangepicker.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule} from '@angular/material/select';
import {  MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { Footer } from './footer.component';



@NgModule({
  declarations: [RangepickerComponent, Footer],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    SatDatepickerModule,
    MatInputModule,
    SatNativeDateModule,
    MatButtonModule,
    BrowserModule
      ],
  exports: [RangepickerComponent],
  entryComponents: [Footer]
})
export class RangepickerModule { }
