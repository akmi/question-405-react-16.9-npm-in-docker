import axios from 'axios'
export default axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
        'content-type': 'application/json'
    }
})
