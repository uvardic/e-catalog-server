import * as path from 'path'

interface IConf {
    server: {
        port: number,
    },

    static: {
        rout: string,
        path: string,
        options: {
            index: boolean,
            cacheControl: boolean,
            etag: boolean,
            dotfiles: 'deny' | 'allow',
            maxAge: number
        }
    },

    database: {
        host: string,
        port: number,
        user: string,
        password: string,
        database: string,
        charset: string,
        timezone: string,
        supportBigNumbers: boolean
    }
}

const pathToResources = () => path.join(__dirname, '../../resources')

const pathToStatic = () => path.join(pathToResources(), 'static')

const dev: IConf = {
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

export const get = name => {
    switch (name) {
        case 'dev':
            return dev
        default:
            throw new Error(`Unsupported config name: ${name}`)
    }
}
