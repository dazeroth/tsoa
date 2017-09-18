"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Route(name) {
    return function () { return; };
}
exports.Route = Route;
/**
 * can be used to entirely hide an method from documentation
 */
function Hidden() {
    return function () { return; };
}
exports.Hidden = Hidden;
/**
 * Public method
 */
function Public() {
    return function () { return; };
}
exports.Public = Public;
//# sourceMappingURL=route.js.map