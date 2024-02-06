import axios from "axios";

const API_KEY = "22033849-04a58a8d7b6d53f5d68e2165a";
axios.defaults.baseURL = "https://pixabay.com/api/";

async function fetchImageCollection(name, page=1) {
    const { data } = await axios.get(
        `?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    return data;
};

export { fetchImageCollection };