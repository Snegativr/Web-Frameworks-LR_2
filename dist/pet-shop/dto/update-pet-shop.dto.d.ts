import { CreatePetShopDto } from './create-pet-shop.dto';
declare const UpdatePetShopDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePetShopDto>>;
export declare class UpdatePetShopDto extends UpdatePetShopDto_base {
    id: string;
    Name: string;
    Sex: string;
    Age: string;
    Images: string;
    Documents: string;
    Species: string;
    Breed: string;
}
export {};
