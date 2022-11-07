"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilesController {
    main(req, res) {
        const url = req.firebaseUrl;
        res.send({ url });
    }
}
exports.default = new FilesController();
