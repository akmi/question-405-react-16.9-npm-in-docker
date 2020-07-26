import axios from 'axios'
export default axios.create({
    baseURL:"http://54.236.228.135:4000",
    headers:{
        'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
        'Access-Control-Allow-Origin':'*'
    }
})
