import express from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import dotenv from 'dotenv';
import { groupRouter } from './Router/GroupRouter';
import { taskRouter } from './Router/TaskRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(groupRouter);
app.use(taskRouter)

const server = app.listen(8082, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})