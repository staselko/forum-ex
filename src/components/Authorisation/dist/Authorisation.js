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
exports.__esModule = true;
var react_1 = require("react");
var FormInput_1 = require("../../FormInput/FormInput");
require("./Authorisation.scss");
var Authorisation = function () {
    var _a = react_1.useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    }), userCredantials = _a[0], setUserCredantials = _a[1];
    var handleChange = function (event) {
        var _a;
        var _b = event.target, value = _b.value, targetName = _b.name;
        setUserCredantials(__assign(__assign({}, userCredantials), (_a = {}, _a[targetName] = value, _a)));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { className: "forum__registaration-signup" },
            react_1["default"].createElement(FormInput_1["default"], { type: "email", name: "email", label: "Write email", value: userCredantials.email, handleChange: handleChange }),
            react_1["default"].createElement(FormInput_1["default"], { type: "text", name: "username", label: "Write Your Name", value: userCredantials.username, handleChange: handleChange }),
            react_1["default"].createElement(FormInput_1["default"], { type: "number", name: "phone", label: "Write phone", value: userCredantials.phone, handleChange: handleChange }),
            react_1["default"].createElement(FormInput_1["default"], { type: "text", name: "username", label: "Write username", value: userCredantials.username, handleChange: handleChange }))));
};
exports["default"] = Authorisation;
