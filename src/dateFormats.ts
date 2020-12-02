type DayOfTheWeek  = 'Sunday' | 'Monday' | 'TuesDay' | 'Wednesday' | 'Thursday' | 'Fryday' | 'Saturday';
const dayOfTheWeek: DayOfTheWeek[] = ['Sunday', 'Monday', 'TuesDay', 'Wednesday', 'Thursday', 'Fryday', 'Saturday'];

export type YM = {
  year: number,
  month: number,
}

export type YMD = YM & {
  day: number,
}

const GetDayOfTheWeek = (ymd: YMD) => {
  return dayOfTheWeek[new Date(ymd.year, ymd.month, ymd.day).getDay()];
}

export default GetDayOfTheWeek;