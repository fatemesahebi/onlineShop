import axios from './setup'

export const getOffDayProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('/api/off-products')
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e.response)
            })
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`api/products/${id}`)
            .then((res) => resolve(res.data))
            .catch((e) => reject(e.response))
    })
}

export const getMostSaleProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('/api/most-sale')
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e.response)
            })
    })
}

export const getMostOffProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('/api/most-off')
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e.response)
            })
    })
}


export const getCategoryProducts = (categoryName) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/category/${categoryName}`)
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e.response)
            })
    })
}


export const getBrandProducts = (brandName) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/brands/${brandName}`)
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e.response)
            })
    })
}

