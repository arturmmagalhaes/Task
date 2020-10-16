import { BaseDatabase } from "./Base";

export class TaskDataBase extends BaseDatabase {
    public static Table_Name = 'task';

    public async insertTask(data: any) {
        try {
            await super.getConnection().raw(`
            INSERT INTO ${TaskDataBase.Table_Name}
            VALUES ("${data.id}","${data.name}", "${data.id_group}")
        `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

    public async updateTaskName(data: any) {
        try {
            await super.getConnection().raw(`
            UPDATE ${TaskDataBase.Table_Name}
            SET name = "${data.name}"
            WHERE id = "${data.id}"
        `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

    public async updateTaskGroup(data: any) {
        try {
            await super.getConnection().raw(`
                UPDATE ${TaskDataBase.Table_Name}
                SET id_group = "${data.id_group}", name = "${data.name}"
                WHERE id = "${data.id}"
        `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

    public async deleteTaskById(data: any) {
        try {
            await super.getConnection().raw(`
            DELETE FROM ${TaskDataBase.Table_Name}
            WHERE id = "${data}"
        `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

}