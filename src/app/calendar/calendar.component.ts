import { Component } from '@angular/core';
import { CalendarDataService } from '../calendar-data.service';
import { HoverService } from '../hover.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [HoverService],
})
export class CalendarComponent {
  public calendarData$ = this.calendarDataService.getCalendarData();

  constructor(private calendarDataService: CalendarDataService) {}
}
