import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SatCalendar, SatCalendarFooter, SatDatepicker } from 'saturn-datepicker';
import { DateAdapter } from 'saturn-datepicker';
import { RangepickerService } from './rangepicker.service';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
    templateUrl: './footer.component.html',
    styleUrls: ['./rangepicker.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Footer<Date> implements SatCalendarFooter<Date> {
    private destroyed = new Subject<void>();

    constructor(
        private calendar: SatCalendar<Date>,
        private datePicker: SatDatepicker<Date>,
        private dateAdapter: DateAdapter<Date>,
        private rangepickerService: RangepickerService,
        cdr: ChangeDetectorRef
    ) {
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => cdr.markForCheck());
         calendar.maxDate = new Date(Date.now()) as any;
    }

    save() {
        this.rangepickerService.setSave();
        this.datePicker.close();
    }
    cancel() {
        this.datePicker.close();

    }
 }