import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productController } from './products.controller';
import { ProductShema } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductShema }]),
  ],
  controllers: [productController],
  providers: [ProductsService],
})
export class ProductsModule {}
