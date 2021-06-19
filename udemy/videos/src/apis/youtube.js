import axios from 'axios';

const KEY = "AIzaSyBEKLEuNOe3N4QFlj6zKkwde9rih6yKCKQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
