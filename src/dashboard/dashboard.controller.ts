import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { DashboardService, Inflation } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @HttpCode(HttpStatus.OK)
  @Get('inflation-by-year/:year')
  findOne(@Param('year') year: string): Inflation {
    return this.dashboardService.findOne(year);
  }
}
