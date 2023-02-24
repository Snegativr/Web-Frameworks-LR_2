import { PartialType } from '@nestjs/mapped-types';
import { CreatePetShopDto } from './create-pet-shop.dto';

export class UpdatePetShopDto extends PartialType(CreatePetShopDto) {
  public id: string;
  public Name: string;
  public Sex: string;
  public Age: string;
  public Images: string;
  public Documents: string;
  public Species: string;
  public Breed: string;
}
