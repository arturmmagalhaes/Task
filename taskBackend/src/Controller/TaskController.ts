import { Request, Response } from 'express';
import { TaskDataBase } from '../Data/TaskDatabase';

export class TaskController {
    private static taskDatabase = new TaskDataBase();

    public async insertTask(req: Request, res: Response) {
        try{
            const dataController = {
                name: req.body.name,
                id_group: Number(req.params.id)
            }
    
            await TaskController.taskDatabase.insertTask(dataController);

            res.status(200).send({
                message: "Created Task"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async updateTaskName(req: Request, res: Response) {
        try{
            const dataController = {
                id: req.params.id,
                name: req.body.name
            }

            await TaskController.taskDatabase.updateTaskName(dataController)
    
            res.status(200).send({
                message: "Updated Task Name"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }
    
    public async updateTaskGroup(req: Request, res: Response) {
        try{

            const dataController = {
                id: Number(req.params.id),
                name: req.body.name,
                id_group: Number(req.params.id_group)
            }
    
            await TaskController.taskDatabase.updateTaskGroup(dataController);

            res.status(200).send({
                message: "Updated Task Group"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }
    
    public async deleteTaskById(req: Request, res: Response) {
        try{
            
            await TaskController.taskDatabase.deleteTaskById(Number(req.params.id));

            res.status(200).send({
                message: "Deleted Task"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }
}