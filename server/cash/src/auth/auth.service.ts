import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemes/users.scheme';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string): Promise<User | null> {
    const user = await this.userService.findOne(username);
    if (!user) return null;
    return user;
  }
  async generateAccessToken(user: User) {
    return {
      access_token: this.jwtService.sign({ user }),
    };
  }
  async generateRefreshToken(userId: string) {
    return {
      refresh_token: this.jwtService.sign(
        { userId },
        { secret: jwtConstants.secret, expiresIn: '30d' },
      ),
    };
  }
  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return { error: error.message };
    }
  }
  parseJwt(token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  }
  async getUserByTokenData(token: string):Promise<User>{
    const parsedTokenData = this.parseJwt(token);
    return await this.userService.findOne(parsedTokenData.user.username)
  }
}
