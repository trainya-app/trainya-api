import { Router } from 'express';
import ACLController from '../app/controllers/ACL/ACLController';
const aclRoutes = Router();

aclRoutes.get('/acl', ACLController.index);
aclRoutes.post('/acl', ACLController.store);

export default aclRoutes;
