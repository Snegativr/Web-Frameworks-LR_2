import { Module } from '@nestjs/common';
import { PetShopService } from './pet-shop.service';
import { PetShopController } from './pet-shop.controller';

@Module({
  controllers: [PetShopController],
  providers: [PetShopService],
})
export class PetShopModule {}
