import { Injectable } from '@nestjs/common';

export type Inflation = any;

@Injectable()
export class DashboardService {
  private readonly inflationByYear = [
    {
      year: '2023',
      data: [
        334.9, 415.6, 439.6, 439.3, 429.2, 404.4, 398.2, 394.8, 317.6, 316.5,
        282.8, 189.8,
      ],
    },
  ];

  async findOne(year: string): Promise<Inflation | undefined> {
    return this.inflationByYear.find((inflation) => inflation.year === year);
  }
}
