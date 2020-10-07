"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonTranslationJA = exports.commonTranslationEN = exports.commonTranslationKeys = exports.COMMON_NAMESPACE = void 0;
exports.COMMON_NAMESPACE = 'Common';
var CommonTranslationKeys;
(function (CommonTranslationKeys) {
    CommonTranslationKeys[CommonTranslationKeys["totalRewards"] = 0] = "totalRewards";
})(CommonTranslationKeys || (CommonTranslationKeys = {}));
exports.commonTranslationKeys = Object.keys(CommonTranslationKeys).reduce(function (allKeys, key) {
    var _a;
    return (__assign(__assign({}, allKeys), (_a = {}, _a[key] = key, _a)));
}, {});
exports.commonTranslationEN = {
    totalRewards: 'Total Reward'
};
exports.commonTranslationJA = {
    totalRewards: '総報酬'
};
