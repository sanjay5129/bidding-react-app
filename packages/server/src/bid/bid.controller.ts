import {
  Controller,
  Get,
  Post,
  Put,
  UsePipes,
  Body,
  HttpStatus,
  UseGuards,
  Param, 
} from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { JoiValidationPipe } from 'src/utils/joiValidation.pipe';
import { BidService } from './bid.service';
import { BidDocument } from 'src/schemas/bid.schema';
import { createBidItemValidation, updateBidItemValidation } from './bid.joi';
import { CreateBidItemDto, UpdateBidItemDto } from './bid.dto';
import CustomHttpException from 'src/utils/CustomHttpException';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('bidItems')
export class BidController {
  constructor(private bidService: BidService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get All the Bid Items' })
  @UseGuards(JwtAuthGuard)
  async getBidItems(): Promise<BidDocument[]> {
    try {
      return await this.bidService.getBidItems();
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update BidItem details' })
  @ApiBody({ type: UpdateBidItemDto })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async updateBidItems(
    @Param() params: any,
    @Body(new JoiValidationPipe(updateBidItemValidation))
    updatedData: UpdateBidItemDto,
  ) {
    try {
      return await this.bidService.updateBidItems(params.id, updatedData);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create BidItem with valid information' })
  @ApiBody({ type: CreateBidItemDto })
  @UsePipes(new JoiValidationPipe(createBidItemValidation))
  async createUser(@Body() bidData: CreateBidItemDto) {
    try {
      return await this.bidService.createBidItems(bidData);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }
}
