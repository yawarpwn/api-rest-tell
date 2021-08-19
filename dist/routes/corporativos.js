"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const corporativoSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    desc: {
        parraph1: {
            type: String,
            require: true,
        },
        parraph2: String,
        parraph3: String,
        parraph4: String
    },
    price: { type: Number, require: true },
    category: String,
    available: Boolean,
    fichaTecnica: String,
    pedidoMinimo: Number,
    sku: String,
    rating: Number,
    img: {
        img1: { type: String, require: true },
        img2: String,
        img3: String,
        img4: String
    },
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Corporativo', corporativoSchema);
