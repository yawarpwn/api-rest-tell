"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const productControllers_1 = require("./productControllers");
const cintasCtr = __importStar(require("./cintasControllers"));
const accesoriosCtr = __importStar(require("./accesoriosControllers"));
const extintoresCtr = __importStar(require("./extintoresControllers"));
const corporativosCtr = __importStar(require("./corporativosControllers"));
const eppsCtr = __importStar(require("./eppsControllers"));
router.get('/', productControllers_1.getHome);
router.get('/proteccion-vial', productControllers_1.getProducts);
router.get('/cintas', cintasCtr.getCintas);
router.get('/accesorios', accesoriosCtr.getAccesorios);
router.get('/extintores', extintoresCtr.getExtintors);
router.get('/epps', eppsCtr.getEpps);
router.get('/corporativos', corporativosCtr.getCorporativos);
router.get('/proteccion-vial/:id', productControllers_1.getProduct);
router.get('/cintas/:id', cintasCtr.getCinta);
router.get('/accesorios/:id', accesoriosCtr.getAccesorio);
router.get('/extintores/:id', extintoresCtr.getExtintor);
router.get('/epps/:id', eppsCtr.getEpp);
router.get('/corporativos/:id', corporativosCtr.getCorporativo);
router.post('/proteccion-vial', productControllers_1.createProduct);
router.post('/cintas', cintasCtr.createCinta);
router.post('/accesorios', accesoriosCtr.createAccesorio);
router.post('/extintores', extintoresCtr.createExtintor);
router.post('/epps', eppsCtr.createEpp);
router.post('/corporativos', corporativosCtr.createCorporativo);
router.delete('/proteccion-vial/:id', productControllers_1.deleteProduct);
router.delete('/cintas/:id', cintasCtr.deleteCinta);
router.delete('/accesorios/:id', accesoriosCtr.deleteAccesorio);
router.delete('/extintores/:id', extintoresCtr.deleteExtintor);
router.delete('/epps/:id', eppsCtr.deleteEpp);
router.delete('/corporativos/:id', corporativosCtr.deleteCorporativo);
router.put('/proteccion-vial/:id', productControllers_1.updateProduct);
router.put('/cintas/:id', cintasCtr.updateCinta);
router.put('/accesorios/:id', accesoriosCtr.updateAccesorio);
router.put('/extintores/:id', extintoresCtr.updateExtintor);
router.put('/epps/:id', eppsCtr.updateEpp);
router.put('/corporativos/:id', corporativosCtr.updateCorporativo);
exports.default = router;
