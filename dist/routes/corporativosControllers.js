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
exports.deleteCorporativo = exports.updateCorporativo = exports.createCorporativo = exports.getCorporativo = exports.getCorporativos = void 0;
const corporativos_1 = __importDefault(require("./corporativos"));
const getCorporativos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield corporativos_1.default.find();
        res.send(products);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getCorporativos = getCorporativos;
const getCorporativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield corporativos_1.default.findById(req.params.id);
    if (!productFound)
        return res.status(204).json();
    return res.json(productFound);
});
exports.getCorporativo = getCorporativo;
const createCorporativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CorporativoFound = yield corporativos_1.default.findOne({ name: req.body.name });
    if (CorporativoFound)
        return res.status(301).json({ message: 'name already exist' });
    console.log(req.body);
    const corporativo = new corporativos_1.default(req.body);
    const savedCorporativo = yield corporativo.save();
    res.json(savedCorporativo);
});
exports.createCorporativo = createCorporativo;
const updateCorporativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield corporativos_1.default.findByIdAndUpdate(req.params.id, req.body);
    res.json(productFound);
});
exports.updateCorporativo = updateCorporativo;
const deleteCorporativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield corporativos_1.default.findByIdAndDelete(req.params.id);
    !productFound ? res.status(204).json() : res.json(productFound);
});
exports.deleteCorporativo = deleteCorporativo;
