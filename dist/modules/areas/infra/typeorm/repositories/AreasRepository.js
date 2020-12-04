"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ICreateAreaDTO_1 = require("../../../dtos/ICreateAreaDTO");
const IAreasRepository_1 = require("../../../repositories/IAreasRepository");
const typeorm_1 = require("typeorm");
const Area_1 = require("../entities/Area");
class AreasRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Area_1.default);
    }
    async create({ nome, }) {
        const area = this.ormRepository.create({ nome });
        await this.ormRepository.save(area);
        return area;
    }
}
exports.default = AreasRepository;
//# sourceMappingURL=AreasRepository.js.map