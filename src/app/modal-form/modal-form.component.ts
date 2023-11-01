import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarDataService } from '../calendar-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      date: Date;
      index: number;
    },
    private calendarDataService: CalendarDataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      date: [this.formatDate(this.data.date)],
      description: ['', [Validators.required, Validators.min(1)]],
    });
  }

  public save() {
    this.calendarDataService.addDate(
      {
        date: this.data.date,
        description: this.form.controls['description'].value,
      },
      this.data.index
    );
    this.onClose();
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }
}
