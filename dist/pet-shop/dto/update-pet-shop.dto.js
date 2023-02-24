"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetShopDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pet_shop_dto_1 = require("./create-pet-shop.dto");
class UpdatePetShopDto extends (0, mapped_types_1.PartialType)(create_pet_shop_dto_1.CreatePetShopDto) {
}
exports.UpdatePetShopDto = UpdatePetShopDto;
//# sourceMappingURL=update-pet-shop.dto.js.map