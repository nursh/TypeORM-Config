"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("../dbConnection");
const Book_1 = require("../entity/Book");
class Routes {
    constructor() {
        this.getDBConnection();
    }
    getDBConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield dbConnection_1.getConnection();
            return this.connection;
        });
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.send({
                message: 'Typescript-Express was successful'
            });
        });
        app.route('/createBook')
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            const bookRepo = this.connection.getRepository(Book_1.default);
            const book = bookRepo.create({ title: 'Galacticos' });
            yield bookRepo.save(book);
            res.send({
                message: `Book created: ${book}`
            });
        }));
        app.route('/books')
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            const bookRepo = this.connection.getRepository(Book_1.default);
            const books = yield bookRepo.find();
            res.send({ books });
        }));
    }
}
exports.Routes = Routes;
