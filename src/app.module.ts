import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://nikunj:BCPXYGpwU7Y80F7x@cluster0.bl2o5uf.mongodb.net/nest-note',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
