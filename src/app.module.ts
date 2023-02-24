import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetShopModule } from './pet-shop/pet-shop.module';

@Module({
  imports: [PetShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
