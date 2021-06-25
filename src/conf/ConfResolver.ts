import IConfig from "./IConf.interface";
import {pathToStatic} from "../util/PathUtil";

const dev: IConfig = {
    server: {
        port: 9000,
    },

    static: {
        rout: '/static',
        path: pathToStatic(),
        options: {
            index: false,
            cacheControl: true,
            etag: true,
            dotfiles: 'deny',
            maxAge: 3600000
        }
    },

    database: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'e_catalog',
        charset: 'utf8',
        timezone: '+01:00',
        supportBigNumbers: true
    }
}

export const getConf = name => {
    switch (name) {
        case 'dev':
            return dev
        default:
            throw new Error(`Unsupported config name: ${name}`)
    }
}
