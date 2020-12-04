"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ICreateAreaDTO_1 = require("../../dtos/ICreateAreaDTO");
const Area_1 = require("../../infra/typeorm/entities/Area");
const IAreasRepository_1 = require("../IAreasRepository");
class FakeAreasRepository {
    constructor() {
        this.areas = [];
    }
    async create(areaData) {
        let id = 0;
        const area = new Area_1.default();
        Object.assign(area, { id: id + 1 }, areaData);
        this.areas.push(area);
        return area;
    }
}
exports.default = FakeAreasRepository;
//# sourceMappingURL=FakeAreaRepository.js.map