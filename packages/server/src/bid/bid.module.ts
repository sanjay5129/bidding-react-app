import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { Bid, BidSchema } from 'src/schemas/bid.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Bid.name, schema: BidSchema }]),
  ],
  controllers: [BidController],
  providers: [BidService],
  exports: [BidService],
})
export class BidModule {}
