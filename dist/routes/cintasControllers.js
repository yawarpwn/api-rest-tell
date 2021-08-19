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
exports.deleteCinta = exports.updateCinta = exports.createCinta = exports.getCinta = exports.getCintas = void 0;
const cinta_1 = __importDefault(require("./cinta"));
const getCintas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield cinta_1.default.find();
        res.send(products);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getCintas = getCintas;
const getCinta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield cinta_1.default.findById(req.params.id);
    if (!productFound)
        return res.status(204).json();
    return res.json(productFound);
});
exports.getCinta = getCinta;
const createCinta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CintaFound = yield cinta_1.default.findOne({ name: req.body.name });
    if (CintaFound)
        return res.status(301).json({ message: 'name already exist' });
    console.log(req.body);
    const cinta = new cinta_1.default(req.body);
    const savedCinta = yield cinta.save();
    res.json(savedCinta);
});
exports.createCinta = createCinta;
const updateCinta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield cinta_1.default.findByIdAndUpdate(req.params.id, req.body);
    res.json(productFound);
});
exports.updateCinta = updateCinta;
const deleteCinta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield cinta_1.default.findByIdAndDelete(req.params.id);
    !productFound ? res.status(204).json() : res.json(productFound);
});
exports.deleteCinta = deleteCinta;
