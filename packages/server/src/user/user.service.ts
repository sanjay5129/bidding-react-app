import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlattenMaps, Model, ObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './users.dto';
import { SALT_OR_ROUNDS } from 'src/utils/constants';
import customHttpException from 'src/utils/CustomHttpException';

@Injectable()
export class UserService {
  private readonly logger = new Logger(User.name);
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async getUsers() {
    this.logger.log(`Retrieve all Users`);
    const users = await this.userModel.find();
    return users;
  }

  async getUser(id: string) {
    this.logger.log(`Retrieving self information`);
    try {
      const users = await this.userModel
        .findOne({
          _id: id,
        })
        .select({ password: 0 })
        .lean();
      return users;
    } catch (e) {
      throw new customHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error  getting data ${e?.message}`,
      });
    }
  }

  async createUser(userData: CreateUserDto) {
    this.logger.log(`Hashing Password`);
    const hash = await bcrypt.hash(userData.password, SALT_OR_ROUNDS);
    this.logger.log(`Creating User`);
    await this.userModel.create({
      ...userData,
      password: hash,
      plan_expiring: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1),
      ),
    });
    return {};
  }

  async findOne(username: string): Promise<FlattenMaps<UserDocument> & { _id: ObjectId }> {
    const user = await this.userModel
      .findOne({
        email: username,
      })
      .lean();
    return user;
  }
}
