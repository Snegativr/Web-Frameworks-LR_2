import { PetShopService } from './pet-shop.service';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
export declare class PetShopController {
    private readonly petShopService;
    constructor(petShopService: PetShopService);
    create(pet: CreatePetShopDto): CreatePetShopDto;
    findAll(): CreatePetShopDto[];
    findOne(id: string): CreatePetShopDto;
    update(id: string, updatePetShopDto: UpdatePetShopDto): void;
    remove(id: string): void;
}
