export interface Year {
  year: number;
  months: Month[];
}

export interface Month {
  month: number;
  days: number[];
}

export interface Date {
  year: number;
  month: number | undefined;
  day: number | undefined;
}

export interface Report {
  id: number;
  date: string;
  content: string;
}
