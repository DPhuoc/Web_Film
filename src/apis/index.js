import axios from "axios";

export const getTrendingFilm = () => axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=cb00fe48410bbf828a49ffa81d4fd246');