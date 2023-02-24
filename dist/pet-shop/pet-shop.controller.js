"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetShopController = void 0;
const common_1 = require("@nestjs/common");
const pet_shop_service_1 = require("./pet-shop.service");
const create_pet_shop_dto_1 = require("./dto/create-pet-shop.dto");
const update_pet_shop_dto_1 = require("./dto/update-pet-shop.dto");
const pet_exception_filter_1 = require("./filter/note-exception/pet-exception.filter");
let PetShopController = class PetShopController {
    constructor(petShopService) {
        this.petShopService = petShopService;
    }
    create(pet) {
        return this.petShopService.create(pet);
    }
    findAll() {
        return this.petShopService.findAll();
    }
    findOne(id) {
        return this.petShopService.findOne(id);
    }
    update(id, updatePetShopDto) {
        return this.petShopService.update(id, updatePetShopDto);
    }
    remove(id) {
        return this.petShopService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Header)('Cache-Control', 'none'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_shop_dto_1.CreatePetShopDto]),
    __metadata("design:returntype", void 0)
], PetShopController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetShopController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetShopController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_shop_dto_1.UpdatePetShopDto]),
    __metadata("design:returntype", void 0)
], PetShopController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetShopController.prototype, "remove", null);
PetShopController = __decorate([
    (0, common_1.Controller)('pet-shop'),
    (0, common_1.UseFilters)(new pet_exception_filter_1.PetsExceptionFilter()),
    __metadata("design:paramtypes", [pet_shop_service_1.PetShopService])
], PetShopController);
exports.PetShopController = PetShopController;
//# sourceMappingURL=pet-shop.controller.js.map