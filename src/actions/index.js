import axios from 'axios';

export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = '?key=PAPERCLIP1234';
const API_KEY = '?key=hometown2345';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    console.log(`1: ${ROOT_URL}/posts${API_KEY}`);
    console.log(request);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}