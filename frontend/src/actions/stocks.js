import axios from 'axios';
import { GET_STOCKS } from './types';

// GET STOCKS
export const getStocks = () => dispatch => {
    axios.get('/api/Portfolio/')
        .then(res => {
            dispatch({
                type: GET_STOCKS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}