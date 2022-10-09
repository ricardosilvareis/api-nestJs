"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var livros_controller_1 = require("./controllers/livros.controller");
var livro_model_1 = require("./models/livro.model");
var livros_service_1 = require("./services/livros.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                sequelize_1.SequelizeModule.forRoot({
                    dialect: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'my-secret-pw',
                    database: 'livraria',
                    autoLoadModels: true,
                    synchronize: true
                }),
                sequelize_1.SequelizeModule.forFeature([livro_model_1.Livro]),
            ],
            controllers: [app_controller_1.AppController, livros_controller_1.LivrosController],
            providers: [app_service_1.AppService, livros_service_1.LivrosServices]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
