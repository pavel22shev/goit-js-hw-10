'use strict';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const API_KEY = '95632b02f9162f375a368971925f5209';

export const fetchCountries = query => {
    return fetch(`${BASE_URL}${query}?fields=name,capital,population,flags,languages`).then(
    response => {
        if (!response.ok) {
        throw new Error(response.status);
        }

        return response.json();
    }
    );
};