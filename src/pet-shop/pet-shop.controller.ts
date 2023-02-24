import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
} from '@nestjs/common';
import { PetShopService } from './pet-shop.service';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { PetsExceptionFilter } from './filter/note-exception/pet-exception.filter';

@Controller('pet-shop')
@UseFilters(new PetsExceptionFilter())
export class PetShopController {
  constructor(private readonly petShopService: PetShopService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() pet: CreatePetShopDto) {
    return this.petShopService.create(pet);
  }

  @Get()
  findAll() {
    return this.petShopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petShopService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetShopDto: UpdatePetShopDto) {
    return this.petShopService.update(id, updatePetShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petShopService.remove(id);
  }
}
