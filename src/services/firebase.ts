import { NextFunction, Request, Response } from 'express';
import admin from 'firebase-admin';

import serviceAccount from '../config/firebase-key.json';

const BUCKET = 'trainya-1a87d.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return next();
  }

  const reqFile = req.file;
  const fileName = Date.now() + '.' + reqFile.originalname.split('.').pop();

  const file = bucket.file(fileName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: reqFile.mimetype,
    },
  });

  stream.on('erorr', (err) => {
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

export default uploadFile;
