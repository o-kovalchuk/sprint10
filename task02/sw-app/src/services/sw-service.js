import axios from 'axios';

const BASE_DATA_URL = 'https://swapi.dev/api/';
export const BASE_IMAGES_URL = 'https://starwars-visualguide.com/assets/img/';

export function fetchDataByCategoryName(category) {
    const url = BASE_DATA_URL + category;

    return axios
        .get(url)
        .then(response => response.data);
}
