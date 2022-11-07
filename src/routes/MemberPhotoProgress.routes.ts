import { Router } from 'express';
import MemberPhotoProgressController from '../app/controllers/members/MemberPhotoProgressController';
const memberPhotoProgress = Router();
import MulterMiddleware from '../app/middlewares/MulterMiddleware';
import {uploadFiles} from '../services/firebase';

memberPhotoProgress.get('/memberPhotoProgress', MemberPhotoProgressController.index);
memberPhotoProgress.post('/memberPhotoProgress', MemberPhotoProgressController.store);
memberPhotoProgress.put(
  '/member-uploadFirstPhoto/:monthId',
  MulterMiddleware.single('photo'),
  uploadFiles,
  MemberPhotoProgressController.uploadFirstPhoto
);
memberPhotoProgress.put(
  '/member-uploadSecondPhoto/:monthId',
  MulterMiddleware.single('photo'),
  uploadFiles,
  MemberPhotoProgressController.uploadSecondPhoto
);
memberPhotoProgress.put(
  '/member-uploadThirdPhoto/:monthId',
  MulterMiddleware.single('photo'),
  uploadFiles,
  MemberPhotoProgressController.uploadThirdPhoto
);
memberPhotoProgress.get('/member-photos-progress', MemberPhotoProgressController.showByMember);


export default memberPhotoProgress;
