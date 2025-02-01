// モックデータ
export const mockData = [
  {
    year: 2022,
    months: [
      {
        month: 12,
        reports: [
          {
            id: 5,
            date: "2022-12-31",
            title: "12月31日の日報",
            content: "年末の業務...",
          },
        ],
      },
    ],
  },
  {
    year: 2023,
    months: [
      {
        month: 5,
        reports: [
          {
            id: 1,
            date: "2023-05-01",
            title: "5月1日の日報",
            content: "今日は...",
          },
          {
            id: 2,
            date: "2023-05-02",
            title: "5月2日の日報",
            content: "本日は...",
          },
        ],
      },
      {
        month: 6,
        reports: [
          {
            id: 3,
            date: "2023-06-01",
            title: "6月1日の日報",
            content: "今日から6月...",
          },
          {
            id: 4,
            date: "2023-06-02",
            title: "6月2日の日報",
            content: "梅雨入りしました...",
          },
        ],
      },
    ],
  },
];
