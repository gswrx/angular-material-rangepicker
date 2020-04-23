import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DaterangepickerModule } from 'daterangepicker';
// import { DaterangepickerV2Module } from 'daterangepicker-v2';
import { Footer } from './footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { SatDatepickerModule } from 'saturn-datepicker';
import { SatNativeDateModule } from 'saturn-datepicker';
import { RangepickerModule } from 'rangepicker';


@NgModule({
  declarations: [AppComponent, Footer],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonModule, 
    BrowserAnimationsModule, 
    RangepickerModule,
    SatDatepickerModule, 
    SatNativeDateModule ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Footer],

})
export class AppModule {}
