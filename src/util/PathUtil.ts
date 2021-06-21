import * as path from 'path'

const pathToResources = () => path.join(__dirname, '../../resources')

const pathToStatic = () => path.join(pathToResources(), 'static')

export {
    pathToResources,
    pathToStatic
}
