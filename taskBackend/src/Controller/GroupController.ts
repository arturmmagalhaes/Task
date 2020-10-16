import { Request, Response } from 'express';
import { GroupDataBase } from '../Data/GroupDatabase';

export class GroupController {

    private static groupDatabase = new GroupDataBase();

    public async getData(req: Request, res: Response) {
        try{

            const result = await GroupController.groupDatabase.getData();

            res.status(200).send({
                group: result.group,
                task: result.task
            });
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async insertGroup(req: Request, res: Response) {
        try{

            const dataController = {
                name: req.body.name,
            }

            await GroupController.groupDatabase.insertGroup(dataController);

            res.status(200).send({
                message: "Created Group"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async updateGroupName(req: Request, res: Response) {
        try{
            
            const dataController = {
                id: Number(req.params.id),
                name: req.body.name
            }

            await GroupController.groupDatabase.updateGroupName(dataController);

            res.status(200).send({
                message: "Updated Group Name"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async deleteGroupById(req: Request, res: Response) {
        try{
            
            await GroupController.groupDatabase.deleteGroupById(Number(req.params.id));
            
            res.status(200).send({
                message: "Delete Group"
            })
        } catch(error){
            res.status(400).send({
                message: error.message
            });
        }
    }

}