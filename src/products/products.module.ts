import { Module } from '@nestjs/common';
import { productController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [productController],
  providers: [ProductsService],
})
export class ProductsModule {}
