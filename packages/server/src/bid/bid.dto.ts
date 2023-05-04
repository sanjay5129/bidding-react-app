import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBidItemDto {
  @ApiProperty({ type: 'string', required: true })
  name: string;

  @ApiProperty({ type: 'number', required: true })
  start_price: number;

  @ApiProperty({ type: 'number', required: true })
  time_window: number;
}

export class UpdateBidItemDto {
  @ApiPropertyOptional({ type: 'string' })
  name: string;

  @ApiPropertyOptional({ type: 'number' })
  start_price: number;

  @ApiPropertyOptional({
    type: 'number',
  })
  time_window: number;
}

export class UpdateBidItemPriceDto {
  @ApiPropertyOptional({ type: 'string' })
  start_price: number;
}
