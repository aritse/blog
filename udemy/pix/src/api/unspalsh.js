import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID C1Fle4eXtfTFTWtRRhUhj_iEj_H8uOlqW-BmCEu_J14'
    }
});