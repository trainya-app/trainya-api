"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = exports.uploadAvatar = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firebase_key_json_1 = __importDefault(require("../config/firebase-key.json"));
const BUCKET = 'trainya-1a87d.appspot.com';
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebase_key_json_1.default),
    storageBucket: BUCKET,
});
const bucket = firebase_admin_1.default.storage().bucket();
const uploadAvatar = (req, res, next) => {
    if (!req.file) {
        return next();
    }
    const date = (new Date()).getTime();
    const reqFile = req.file;
    const fileName = date + '.' + reqFile.originalname.split('.').pop();
    const file = bucket.file('avatars/' + fileName);
    const stream = file.createWriteStream({
        metadata: {
            contentType: reqFile.mimetype,
        },
    });
    stream.on('error', (err) => {
        console.error(err);
    });
    stream.on('finish', async () => {
        //set file public
        await file.makePublic();
        //set url public
        req.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/avatars/${fileName}`;
        next();
    });
    stream.end(reqFile.buffer);
};
exports.uploadAvatar = uploadAvatar;
const uploadFiles = (req, res, next) => {
    if (!req.file) {
        return next();
    }
    const date = (new Date()).getTime();
    const reqFile = req.file;
    const fileName = date + '.' + reqFile.originalname.split('.').pop();
    const file = bucket.file('' + fileName);
    const stream = file.createWriteStream({
        metadata: {
            contentType: reqFile.mimetype,
        },
    });
    stream.on('error', (err) => {
        console.error(err);
    });
    stream.on('finish', async () => {
        //set file public
        await file.makePublic();
        //set url public
        req.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileName}`;
        next();
    });
    stream.end(reqFile.buffer);
};
exports.uploadFiles = uploadFiles;
