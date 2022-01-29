import axios from "axios";
const instance=axios.create({
    timeout:5000,
})

instance.interceptors.request.use(
    function (config){
        console.log('Done!')
        return config
    },
    function (error){
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    function (response){
        return response
    },
    function (error){
        const originalRequest=error.config;
        const res=error.response;
        return Promise.reject(error)
    }
)
export default instance;