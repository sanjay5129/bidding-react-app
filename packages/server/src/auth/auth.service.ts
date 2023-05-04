import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  private readonly logger = new Logger();
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user?.password) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        const { ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: UserDocument) {
    const payload = { email: user.email, userId: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
