import axios from 'axios';

const axiosFetch= axios.create({
    baseURL: 'https://gta-server-connect.onrender.com',
    headers:{
        Accept:'application/json',
    },
});

export default axiosFetch;
