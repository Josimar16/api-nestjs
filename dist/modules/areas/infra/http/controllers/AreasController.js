"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ICreateAreaDTO_1 = require("../../../dtos/ICreateAreaDTO");
const CreateAreaService_1 = require("../../../services/CreateAreaService");
class AreasController {
    constructor(createAreaService) {
        this.createAreaService = createAreaService;
    }
    async create({ nome }) {
        const area = await this.createAreaService.execute({ nome });
        return area;
    }
}
exports.default = AreasController;
//# sourceMappingURL=AreasController.js.map