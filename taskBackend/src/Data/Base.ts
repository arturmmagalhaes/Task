import knex from 'knex';

export abstract class BaseDatabase {

    private static Connection: null|knex = null;

    protected getConnection() {
        if(BaseDatabase.Connection === null){
            BaseDatabase.Connection = knex({
                client: 'mysql',
                connection: {
                    database: process.env.DB_NAME,
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    port: Number(process.env.PORT) | 3306
                }
            });
        }
        return BaseDatabase.Connection;
    }

    protected async destroyConnection() {
        if(BaseDatabase.Connection !== null){
            BaseDatabase.Connection = null;
        }
    }
}