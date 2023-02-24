import { Injectable } from '@nestjs/common';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { PetsException } from '../pet-shop/exception/note.exception/pet.exception';
import { uuid } from 'uuidv4';

@Injectable()
export class PetShopService {
  private pets: CreatePetShopDto[] = [];

  create(createPetDto: CreatePetShopDto): CreatePetShopDto {
    createPetDto.id = uuid();
    this.pets.push(createPetDto);
    return createPetDto;
  }

  findAll() {
    if (this.pets.length == 0) {
      throw new PetsException('There are no pets');
    }
    return this.pets;
  }

  findOne(id: string) {
    for (const item of this.pets) {
      if (item.id == id) return item;
      throw new PetsException('Such id does not exist');
    }
  }

  update(id: string, updatePetShopDto: UpdatePetShopDto): void {
    //const newPets: UpdatePetShopDto[] = this.pets.filter((c) => c.id !== id);
    const pid = this.pets.findIndex((p) => p.id == id);
    this.pets[pid] = {
      ...this.pets[pid],
      ...updatePetShopDto,
    };
    // newPets.push({
    //   id: id,
    //   ...updatePetShopDto,
    // });
    // this.pets = newPets;
  }
  // update(Name: string,Sex: string, updatePetShopDto: UpdatePetShopDto): void {
  //   const newPets: UpdatePetShopDto[] = this.pets.filter((c) => c.id !== id);

  //   newPets.push({
  //     id: id,
  //     ...updatePetShopDto,
  //   });
  //   this.pets = newPets;
  // }

  remove(id: string) {
    const result: CreatePetShopDto[] = this.pets.filter((c) => c.id !== id);
    if (result.length === this.pets.length) {
      throw new PetsException('Such id does now exist');
    }

    this.pets = result;
  }
}
