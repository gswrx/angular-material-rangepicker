import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Footer } from './footer.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'}
],
})
export class AppComponent implements OnInit {
  title = "environment";
  maxDate = new Date(Date.now());
  serializedDate = new FormControl((new Date()).toISOString());


  onDateRangeSelected(event) {
    console.log(event);
  }

  form: FormGroup;
  range;
  footer = Footer ;

  inlineRange;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [{begin: null, end: null}]
    });

    // this.range = `${this.form.value.date.begin.format('MMM Do YY')} - ${this.form.value.date.end.format('MMM Do YY')}`;

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // moment.locale('nl-NL');
  }

  inlineRangeChange($event) {
    this.inlineRange = $event;
  }

  test(selected) {
    console.log(selected, 'hi');
    
  }
}
