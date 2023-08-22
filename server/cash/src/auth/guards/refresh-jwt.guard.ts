import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { AuthService } from '../auth.service';
import { UsersService } from 'src/users/users.service';
  
  @Injectable()
  export class RefreshJWTGuard implements CanActivate {
    constructor(private usersService: UsersService) {}
    //@ts-ignore
    async canActivate(
      context: ExecutionContext,
    ): Promise<boolean | Promise<boolean> | Observable<boolean>> {
      const request = context.switchToHttp().getRequest();
      const {refresh_token, username} = request.body;
      if (!refresh_token) {
        throw new UnauthorizedException('Поле refresh_token обязательно');
      }
      if (!username) {
        throw new UnauthorizedException('Поле username обязательно');
      }
      const user = await this.usersService.findOne(username)
      if(!user){
        throw new UnauthorizedException("Такого пользователя не существует");
      }
   
      return true;
    }
  }