"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
require("jquery-tab");
require("jquery-tab/src/built/theme/gray");
require("../css/main.css");
jquery_1.default('.tab1').tab();
