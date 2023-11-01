export interface Calendar {
  dates: CalendarDate[];
}

export type CalendarDate = {
  date: Date;
  description: string | null;
};
