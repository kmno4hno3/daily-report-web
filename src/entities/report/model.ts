export interface Report {
  id: string;
  date: string;
  title: string;
  content: string;
}

export interface MonthData {
  month: string;
  reports: Report[];
}

export interface YearData {
  year: string;
  months: MonthData[];
}
