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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = exports.getHome = void 0;
const product_1 = __importDefault(require("./product"));
const getHome = (_req, res) => {
    res.send('hello world');
};
exports.getHome = getHome;
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        res.send(products);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield product_1.default.findById(req.params.id);
    if (!productFound)
        return res.status(204).json();
    return res.json(productFound);
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ProductFound = yield product_1.default.findOne({ name: req.body.name });
    if (ProductFound)
        return res.status(301).json({ message: 'name already exist' });
    console.log(req.body);
    const product = new product_1.default(req.body);
    const savedProduct = yield product.save();
    res.json(savedProduct);
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield product_1.default.findByIdAndUpdate(req.params.id, req.body);
    res.json(productFound);
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productFound = yield product_1.default.findByIdAndDelete(req.params.id);
    !productFound ? res.status(204).json() : res.json(productFound);
});
exports.deleteProduct = deleteProduct;
