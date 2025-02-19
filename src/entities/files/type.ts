export type fileList = year[];
interface year {
  year: number;
  months: month[];
}
interface month {
  month: number;
  reports: report[];
}
interface report {
  date: number;
}
