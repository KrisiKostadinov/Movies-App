import axios from "axios";

const BASE_URI = 'https://movies-and-serials-torrent.p.rapidapi.com/movies';

const headers = {
    'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com',
    'X-RapidAPI-Key': 'c235de80d8mshd48d218b1ff0b39p1209a0jsna825535540c6'
  }

function getMovies() {
    return axios.get(BASE_URI + '/latest', {
        headers: headers
    });
}

function getById(id) {
    return axios.get(BASE_URI + '/detail/' + id, {
        headers: headers
    });
}

export default {
    getMovies,
    getById,
};