"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Area_1 = require("../../infra/typeorm/entities/Area");
const AreasController_1 = require("../../infra/http/controllers/AreasController");
const CreateAreaService_1 = require("../../services/CreateAreaService");
let AreaModule = class AreaModule {
};
AreaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Area_1.default])],
        controllers: [AreasController_1.default],
        providers: [CreateAreaService_1.default]
    })
], AreaModule);
exports.default = AreaModule;
//# sourceMappingURL=area.module.js.map