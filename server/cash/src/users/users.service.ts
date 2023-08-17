import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User, UsersDocument } from 'src/schemes/users.scheme';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}

  async registartion(createUserDto: CreateUserDto): Promise<User | null> {
    const existingUser = await this.usersModel.collection.findOne({
      username: createUserDto.username,
    });
    if (existingUser) {
      return null;
    }
    const saltRounds = 10;
    const savePassword = await bcrypt.hash(createUserDto.password, saltRounds);
    const createdUser = new this.usersModel({
      username: createUserDto.username,
      password: savePassword,
    });
    return createdUser.save();
  }
  async findOne(username: string): Promise<User> {
    return this.usersModel.findOne({ username });
  }
  async login(loginUserDto: LoginUserDto): Promise<User | null> {
    const existingUser = await this.usersModel.collection.findOne({
      username: loginUserDto.username,
    });
    if (!existingUser) return null;
    return existingUser as User;
  }
}
