"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlValidator = (function () {
    function UrlValidator() {
    }
    UrlValidator.validURL = function (control) {
        if (control.value == "")
            return null;
        else if (control.value.substring(0, 8) == "https://")
            return null;
        else if (control.value.substring(0, 7) == "http://")
            return null;
        else
            return { invalidURL: control.value };
    };
    return UrlValidator;
}());
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=url.validator.js.map