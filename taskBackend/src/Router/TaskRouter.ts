import express from 'express';
import { TaskController } from '../Controller/TaskController';

export const taskRouter = express.Router();

taskRouter.post('/inserttask/:id', new TaskController().insertTask);
taskRouter.put('/updatetaskname/:id', new TaskController().updateTaskName);
taskRouter.put('/updatetaskgroup/:id/:id_group', new TaskController().updateTaskGroup);
taskRouter.delete('/deletetask/:id', new TaskController().deleteTaskById);