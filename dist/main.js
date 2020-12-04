"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("./shared/infra/typeorm");
const AppError_1 = require("./shared/errors/AppError");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((err, request, response, _) => {
        if (err instanceof AppError_1.default)
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map