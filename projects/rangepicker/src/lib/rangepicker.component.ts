import { Component, Output, EventEmitter, ViewEncapsulation, OnInit, Input, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Footer } from './footer.component';
import { RangepickerService } from './rangepicker.service';
import { SatDatepicker } from 'saturn-datepicker';
import * as moment_ from 'moment';
import {Observable, Subject} from 'rxjs';

const moment = moment_;

export interface RangeSelectorType {
  start: moment_.Moment;
  end: moment_.Moment;

}

@Component({
  selector: 'gswrx-rangepicker',
  templateUrl: './rangepicker.component.html',
  styleUrls: ['./rangepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RangepickerComponent implements OnInit {
  @Output() dateSelected = new EventEmitter<any>();
  @Input() useSelector: boolean = true;
  @Input() setDate: Observable<RangeSelectorType>;
  @Input() setContent: Observable<string>;

  selected = 'today';
  range: RangeSelectorType;
  form: FormGroup;
  footer = Footer;
  public customContent: string = "Selecteer een datum"
  public hideRangeContent = false;


  constructor(fb: FormBuilder, private rangepickerService: RangepickerService) {
    this.form = fb.group({
      date: [{begin: moment, end: moment}]
    });
  }


  @Input() set primaryColor(value: string) {
    document.documentElement.style.setProperty('--primary-lib', value);
  }

  @Input() set secondaryColor(value: string) {
    document.documentElement.style.setProperty('--second-lib', value);
  }

  @Input() set saveBtnTxt(value: string) {
    document.documentElement.style.setProperty('--font-lib', value);
  }

  // @Input() set defaultValue(value: any) {
  // }

  ngOnInit(): void {
    this.rangepickerService.getSave().subscribe(save => {
      const begin = this.form.value.date.begin;
      const end = this.form.value.date.end;

      if (save) {


        this.dateSelected.emit({
          start: moment(begin),
          end: moment(end)
        });
      }
    });


    this.dateSelected.subscribe(newDate => {
      this.range = newDate;
      this.hideRangeContent = false;
    });


    // watch for external content-changes
    if(this.setContent){
      this.setContent.subscribe(newContent => {
        this.customContent = newContent;
        this.hideRangeContent = true;
      });
    }

    // watch for external date-changes
    if(this.setDate) {
      this.setDate.subscribe(newDate => {
        this.range = newDate; // we can't use dateSelect.emit to set the range, since that may cause a loop if the parent component has bad code
        this.hideRangeContent = false;
      });
    }


  }

  // onDateInput(date) {
  //   // console.log(date.value);
  //
  //   this.range = {
  //     start: moment(date.value.begin),
  //     end: moment(date.value.end)
  //   };
  //   this.hideRangeContent = false;
  //   // this.dateSelected.emit(this.range);
  // }

  handleSelection(selection) {
    this.range = null;
    switch (selection) {
      case 'today':
        this.dateSelected.emit({single: moment()});
        break;
      case 'yesterday':
        this.dateSelected.emit({single: moment().subtract(1, 'days')});
        break;
      case 'this_month':
        this.dateSelected.emit({
          start: moment().startOf('month'),
          end: moment().endOf('month')
        });
        break;
      case 'last_month':
        this.dateSelected.emit({
          start: moment().subtract(1, 'months').startOf('month'),
          end: moment().subtract(1, 'months').endOf('month')
        });
        break;
    }

  }



}
