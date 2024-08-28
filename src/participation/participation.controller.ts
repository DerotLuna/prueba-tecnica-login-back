import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ParticipationService } from './participation.service';

@Controller('participation')
export class ParticipationController {
  constructor(private participationService: ParticipationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  add(@Body() participationDto: Record<string, any>) {
    return this.participationService.add(
      participationDto.name,
      participationDto.last_name,
      participationDto.phone,
    );
  }
}
