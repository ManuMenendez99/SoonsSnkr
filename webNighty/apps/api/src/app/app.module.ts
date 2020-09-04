import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcatSqlService } from './sqlConcat';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: 'E:\\FTPSERVER\\ARCHIVOSSUBIDOS'
    })
  ],
  controllers: [AppController],
  providers: [AppService, ConcatSqlService],
})
export class AppModule { }
