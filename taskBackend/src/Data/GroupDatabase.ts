import { BaseDatabase } from "./Base";

export class GroupDataBase extends BaseDatabase {
    public static Table_Name = 'group_category';

    public async getData(){
        try {
            const result1 = await super.getConnection().raw(`
                SELECT * FROM ${GroupDataBase.Table_Name};
            `); 
            const result2 = await super.getConnection().raw(`
                SELECT *,${GroupDataBase.Table_Name}.name, task.name AS task FROM ${GroupDataBase.Table_Name}
                JOIN task ON ${GroupDataBase.Table_Name}.id = task.id_group
            `);

            return {
                group: result1[0],
                task: result2[0]
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    public async insertGroup(data: any) {
        try {
            await super.getConnection().raw(`
            INSERT INTO ${GroupDataBase.Table_Name}
            VALUES ("${data.id}","${data.name}")
        `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

    public async updateGroupName(data: any) {
        try {
            await super.getConnection().raw(`
                UPDATE ${GroupDataBase.Table_Name}
                SET name = "${data.name}"
                WHERE id = "${data.id}"
            `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

    public async deleteGroupById(data: any) {
        try {
            await super.getConnection().raw(`
                DELETE FROM task
                WHERE id_group = "${data}"
            `);
            await super.getConnection().raw(`
                DELETE FROM ${GroupDataBase.Table_Name}
                WHERE id = "${data}"
            `);
        } catch (error) {
            throw new Error(error);
        } finally {
            super.destroyConnection();
        }
    }

}