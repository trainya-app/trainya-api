import { Router } from 'express';
import MemberPhotoProgressController from '../app/controllers/members/MemberPhotoProgressController';
const memberPhotoProgress = Router();

memberPhotoProgress.get('/memberPhotoProgress', MemberPhotoProgressController.index);


export default memberPhotoProgress;
