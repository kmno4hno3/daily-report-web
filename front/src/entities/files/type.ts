export interface Year {
  year: number;
  months: Month[];
}

export interface Month {
  month: number;
  days: number[];
}

export interface Report {
  id: number;
  date: string;
  content: string;
}
