"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = exports.initPromise = exports.appWithTranslation = exports.useTranslation = exports.Link = exports.Router = void 0;
var next_i18next_1 = __importDefault(require("next-i18next"));
var nextI18Next = new next_i18next_1.default({
    defaultLanguage: 'en',
    otherLanguages: ['ja'],
    localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
    strictMode: false
});
exports.Router = nextI18Next.Router, exports.Link = nextI18Next.Link, exports.useTranslation = nextI18Next.useTranslation, exports.appWithTranslation = nextI18Next.appWithTranslation, exports.initPromise = nextI18Next.initPromise, exports.i18n = nextI18Next.i18n;
__exportStar(require("./locales"), exports);
exports.default = nextI18Next;
