import { Component, Input } from '@angular/core';
import { CalendarDate } from '../models/calendar-data.model';
import { HoverService } from '../hover.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss'],
})
export class CalendarDateComponent {
  @Input() dateData!: CalendarDate;

  @Input() index!: number;

  public hoverIndex = this.hoverService.hoverIndex;

  constructor(private hoverService: HoverService, public dialog: MatDialog) {}

  public setHoverIndex() {
    this.hoverService.setHoverIndex(this.index);
  }

  public resetHoverIndex() {
    this.hoverService.setHoverIndex(null);
  }

  public openForm() {
    this.dialog.open(ModalFormComponent, {
      data: {
        date: this.dateData.date,
        index: this.index,
      },
    });
  }
}
