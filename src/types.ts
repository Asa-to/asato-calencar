export type DayOfTheWeek  = 'Monday' | 'TuesDay' | 'Wednesday' | 'Thursday' | 'Fryday' | 'Saturday' | 'Sunday';

export type MyDate = {
  year: number,
  month: number,
  day?: number,
  dayOfTheWeek?: DayOfTheWeek,
}