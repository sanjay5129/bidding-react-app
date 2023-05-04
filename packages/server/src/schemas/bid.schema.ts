import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BidDocument = Bid & Document;

@Schema({ timestamps: true })
export class Bid {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  start_price: number;

  @Prop({ required: true })
  time_window: number;
}

export const BidSchema = SchemaFactory.createForClass(Bid);
