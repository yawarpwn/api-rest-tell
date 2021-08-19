"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccesorio = exports.updateAccesorio = exports.createAccesorio = exports.getAccesorio = exports.getAccesorios = void 0;
const accesorios_1 = __importDefault(require("./accesorios"));
const getAccesorios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield accesorios_1.default.find();
        res.send(products);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getAccesorios = getAccesorios;
const getAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield accesorios_1.default.findById(req.params.id);
    if (!productFound)
        return res.status(204).json();
    return res.json(productFound);
});
exports.getAccesorio = getAccesorio;
const createAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AccesorioFound = yield accesorios_1.default.findOne({ name: req.body.name });
    if (AccesorioFound)
        return res.status(301).json({ message: 'name already exist' });
    console.log(req.body);
    const accesorio = new accesorios_1.default(req.body);
    const savedAccesorio = yield accesorio.save();
    res.json(savedAccesorio);
});
exports.createAccesorio = createAccesorio;
const updateAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield accesorios_1.default.findByIdAndUpdate(req.params.id, req.body);
    res.json(productFound);
});
exports.updateAccesorio = updateAccesorio;
const deleteAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield accesorios_1.default.findByIdAndDelete(req.params.id);
    !productFound ? res.status(204).json() : res.json(productFound);
});
exports.deleteAccesorio = deleteAccesorio;
