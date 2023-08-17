import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { MongooseConfigService } from './config/mongooseConfigService';
import configuration from './config/configuration';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useClass:MongooseConfigService
    }),
    ConfigModule.forRoot({
      load:[configuration]
    })
  ],

})
export class AppModule {}
