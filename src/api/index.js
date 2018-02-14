import * as data from '../data/ldb.json'

export const getLineData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(Object.assign({}, data.data)) }, 1000)
    })
}   
