import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bid, BidDocument } from 'src/schemas/bid.schema';
import { CreateBidItemDto, UpdateBidItemDto } from './bid.dto';
import customHttpException from 'src/utils/CustomHttpException';

@Injectable()
export class BidService {
  private readonly logger = new Logger(Bid.name);
  constructor(
    @InjectModel(Bid.name)
    private bidModel: Model<BidDocument>,
  ) {}

  async getBidItems() {
    this.logger.log(`Retrieving all BidItems`);
    const bidItems = await this.bidModel.find();
    return bidItems;
  }

  async createBidItems(userData: CreateBidItemDto) {
    this.logger.log(`Creating a bid item`);
    await this.bidModel.create({
      ...userData,
    });
    return {};
  }

  async updateBidItems(id: string, updatedData: UpdateBidItemDto) {
    this.logger.log(`Updating bid details`);
    try {
      await this.bidModel.findOneAndUpdate(
        {
          _id: id,
        },
        { ...updatedData },
        { upsert: true },
      );
      return {};
    } catch (e) {
      throw new customHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error  getting data ${e?.message}`,
      });
    }
  }
}
