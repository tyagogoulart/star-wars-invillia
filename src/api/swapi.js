import axios from "axios";

export const getPeople = (paginate = '') => {
    return axios.get(paginate === '' ? 'https://swapi.co/api/people/' : paginate)
}

export const getPeopleDetail = (url) => {
    return axios.get(url)
}

export const getStarship = (paginate = '') => {
    return axios.get(paginate === '' ? 'https://swapi.co/api/starships/' : paginate)
}

export const getStarshipDetail = (url) => {
    return axios.get(url)
}

export const getFilmDetail = (url) => {
    return axios.get(url)
}