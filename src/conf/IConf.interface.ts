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
    }
}
