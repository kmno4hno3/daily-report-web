export interface Report {
  id: number;
  date: number;
  title: string;
  content: string;
}

export interface Reports extends Array<Report> {}

export interface MonthData {
  month: string;
  reports: Report[];
}

export interface YearData {
  year: string;
  months: MonthData[];
}
