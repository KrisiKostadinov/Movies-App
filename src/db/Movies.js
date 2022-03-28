import axios from "axios";
import config from '../config/config';

const BASE_URI = 'https://movies-and-serials-torrent.p.rapidapi.com/movies';

function getMovies() {
    return axios.get(BASE_URI + '/latest', {
        headers: config.headers
    });
}

function getById(id) {
    return axios.get(BASE_URI + '/detail/' + id, {
        headers: config.headers
    });
}

export default {
    getMovies,
    getById,
};