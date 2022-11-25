import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://nikunj:RhfUiZul82ZMd1OR@cluster0.bl2o5uf.mongodb.net/nest-note',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
