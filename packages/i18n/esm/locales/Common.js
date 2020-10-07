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
export var COMMON_NAMESPACE = 'Common';
var CommonTranslationKeys;
(function (CommonTranslationKeys) {
    CommonTranslationKeys[CommonTranslationKeys["totalRewards"] = 0] = "totalRewards";
})(CommonTranslationKeys || (CommonTranslationKeys = {}));
export var commonTranslationKeys = Object.keys(CommonTranslationKeys).reduce(function (allKeys, key) {
    var _a;
    return (__assign(__assign({}, allKeys), (_a = {}, _a[key] = key, _a)));
}, {});
export var commonTranslationEN = {
    totalRewards: 'Total Reward'
};
export var commonTranslationJA = {
    totalRewards: '総報酬'
};
