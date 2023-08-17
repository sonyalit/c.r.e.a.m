import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  //@ts-ignore
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean | Promise<boolean> | Observable<boolean>> {
    const request = context.switchToHttp().getRequest();
    const { username, password } = request.body;
    const user = await this.authService.validateUser(username);
    if (!user) {
      throw new UnauthorizedException('Такого пользователя не существует');
    }
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword)
      throw new UnauthorizedException('Неправильный пароль');
    return true;
  }
}
