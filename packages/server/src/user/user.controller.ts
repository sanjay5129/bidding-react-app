import {
  Controller,
  Get,
  Post,
  UsePipes,
  Body,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { JoiValidationPipe } from 'src/utils/joiValidation.pipe';
import { UserService } from './user.service';
import { UserDocument } from 'src/schemas/user.schema';
import { createUserValidation } from './user.joi';
import { CreateUserDto } from './users.dto';
import customHttpException from 'src/utils/CustomHttpException';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/utils/req-logistics';
import { IAuthUser } from 'src/utils/common.interface';
import { FlattenMaps, ObjectId } from 'mongoose';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get All the valid users' })
  @UseGuards(JwtAuthGuard)
  async getUsers(): Promise<UserDocument[]> {
    try {
      return await this.userService.getUsers();
    } catch (e) {
      throw new customHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Get('/me')
  @ApiOperation({ summary: 'Get my details' })
  @UseGuards(JwtAuthGuard)
  async getUser(@User() user: IAuthUser): Promise<FlattenMaps<UserDocument> & { _id: ObjectId }> {
    try {
      return await this.userService.getUser(user.userId);
    } catch (e) {
      throw new customHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create User with valid information' })
  @ApiBody({ type: CreateUserDto })
  @UsePipes(new JoiValidationPipe(createUserValidation))
  async createUser(@Body() userData: CreateUserDto) {
    try {
      return await this.userService.createUser(userData);
    } catch (e) {
      throw new customHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }
}
