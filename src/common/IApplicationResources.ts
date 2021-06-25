import * as mysql2 from 'mysql2/promise'

export default interface ApplicationResources {

    databaseConnection: mysql2.Connection

}