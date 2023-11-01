import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calendar, CalendarDate } from './models/calendar-data.model';

const oneDay = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root',
})
export class CalendarDataService {
  private calendar: Calendar | null = null;

  constructor(private http: HttpClient) {}

  public getCalendarData(): Observable<Calendar> {
    if (this.calendar) {
      return of(this.calendar);
    } else {
      return this.http.get<Calendar>('../assets/mock-dates.json').pipe(
        map((data) => {
          this.calendar = this.fillMissingDateInCalendar(data);
          return this.calendar;
        })
      );
    }
  }

  public addDate(dateData: CalendarDate, index: number) {
    if (this.calendar) {
      this.calendar.dates[index] = dateData;
    }
  }

  private fillMissingDateInCalendar(calendar: Calendar): Calendar {
    if (calendar.dates.length) {
      const dates = calendar.dates;
      calendar.dates = this.getAllDates(dates);
    }
    return calendar;
  }

  private getAllDates(dates: CalendarDate[]): CalendarDate[] {
    if (dates.length < 2) {
      return dates;
    }

    const allDate: CalendarDate[] = [];

    const datesLength = dates.length;

    for (let i = 0; i < datesLength - 1; i++) {
      allDate.push({
        date: new Date(dates[i].date),
        description: dates[i].description,
      });
      const currentDate = new Date(dates[i].date);
      const nextDate = new Date(dates[i + 1].date);

      while (currentDate.getTime() + oneDay < nextDate.getTime()) {
        currentDate.setDate(currentDate.getDate() + 1);
        allDate.push({
          date: new Date(currentDate),
          description: null,
        });
      }
    }

    allDate.push({
      date: new Date(dates[datesLength - 1].date),
      description: dates[datesLength - 1].description,
    });

    return allDate;
  }
}
