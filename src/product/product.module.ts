import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';
//
import { ProductController } from './product.controller';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'Product',
        },
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
