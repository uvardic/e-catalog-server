import IApplicationResources from '../IApplicationResources';
import IModelAdapterOptions from '../IModelAdapterOptions'
import IBaseModel from './IBaseModel.interface'
import * as mysql2 from 'mysql2/promise'
import IErrorResponse from "../IErrorResponse";

export default abstract class BaseService<ReturnModel extends IBaseModel> {

    private resources: IApplicationResources;

    protected constructor(resources: IApplicationResources) {
        this.resources = resources;
    }

    protected get db(): mysql2.Connection {
        return this.resources.databaseConnection;
    }

    protected abstract adaptModel(data: any, options: Partial<IModelAdapterOptions>): Promise<ReturnModel>

    protected async getAllByFieldNameFromTable<AdapterOptions extends IModelAdapterOptions>(
        tableName: string,
        fieldName: string,
        fieldValue: any,
        options: Partial<AdapterOptions> = { }
    ): Promise<ReturnModel[]|IErrorResponse> {
        return new Promise<ReturnModel[]|IErrorResponse>(async (resolve) => {
            const sql = `SELECT * FROM ${tableName} WHERE ${fieldName} = ?;`;

            this.db.execute(sql, [ fieldValue ])
                .then(async result => {
                    const rows = result[0];
                    const returnModels: ReturnModel[] = [];

                    if (Array.isArray(rows)) {
                        for (const row of rows)
                            returnModels.push(await this.adaptModel(row, options))
                    }

                    resolve(returnModels);
                })
                .catch(error => {
                    resolve({
                        errorCode: error?.errno,
                        errorMessage: error?.sqlMessage
                    });
                });
        });
    }

}