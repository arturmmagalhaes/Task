import express from 'express';
import { GroupController } from '../Controller/GroupController';

export const groupRouter = express.Router();

groupRouter.get('/', new GroupController().getData);
groupRouter.post('/insertgroup', new GroupController().insertGroup);
groupRouter.put('/updategroup/:id', new GroupController().updateGroupName);
groupRouter.delete('/deletegroup/:id', new GroupController().deleteGroupById);