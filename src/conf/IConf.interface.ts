export default interface IConfig {
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
