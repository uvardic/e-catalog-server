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
