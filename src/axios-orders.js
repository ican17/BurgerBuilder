import axios from 'axios';

const instance =  axios.create({
    baseURL:'https://burger-builder-a85b9.firebaseio.com/'
});

export default instance;