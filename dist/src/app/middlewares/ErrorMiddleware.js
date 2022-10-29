"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorMiddleware(error, req, res, next) {
    console.log('Error Handler', error);
    res.sendStatus(500);
}
exports.default = ErrorMiddleware;
;
