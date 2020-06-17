import axios from 'axios';

import { APP_KEY, BASE_URL } from '../config';

// Format the result from movie
const formatMovieResult = (results) => {
  if (results) {
    return results.map((item) => {
      return {
        popularity: item.popularity,
        releaseDate: item.release_date,
        title: item.title,
        overview: item.overview,
        posterUrl: item.poster_path
          ? `http://image.tmdb.org/t/p/w342${item.poster_path}`
          : null,
      };
    });
  } else {
    return null;
  }
};

// Format the result from movie
const formatTvResult = (results) => {
  if (results) {
    return results.map((item) => {
      return {
        popularity: item.popularity,
        releaseDate: item.first_air_date,
        title: item.name,
        overview: item.overview,
        posterUrl: item.poster_path
          ? `http://image.tmdb.org/t/p/w342${item.poster_path}`
          : null,
      };
    });
  } else {
    return null;
  }
};

// Format the result from multi
const formatMultiResult = (results) => {
  if (results) {
    return results.map((item) => {
      if (item.media_type === 'tv') {
        return {
          popularity: item.popularity,
          releaseDate: item.first_air_date,
          title: item.name,
          overview: item.overview,
          posterUrl: item.poster_path
            ? `http://image.tmdb.org/t/p/w342${item.poster_path}`
            : null,
        };
      } else {
        return {
          popularity: item.popularity,
          releaseDate: item.release_date,
          title: item.title,
          overview: item.overview,
          posterUrl: item.poster_path
            ? `http://image.tmdb.org/t/p/w342${item.poster_path}`
            : null,
        };
      }
    });
  } else {
    return null;
  }
};

// Search Content by type
export const searchByType = async (searchQuery, searchType, page) => {
  // "Build" the URL
  const url = `${BASE_URL}/search/${searchType}`;

  // Execute the search
  try {
    const response = await axios.get(url, {
      params: {
        api_key: APP_KEY,
        query: searchQuery,
        include_adult: false,
        page: page,
      },
    });

    // Get and return and format it
    let content = null;
    if (response && response.data && response.data.results) {
      switch (searchType) {
        case 'movie':
          content = formatMovieResult(response.data.results);
          break;
        case 'tv':
          content = formatTvResult(response.data.results);
          break;
        case 'multi':
          content = formatMultiResult(response.data.results);
          break;
        default:
          break;
      }

      if (content != null && content.length > 0) {
        content = {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          content
        }
      }

    }
    return content;
  } catch (error) {
    // Throw the error
    throw error;
  }
};

// Search Content by type
export const getList = async (searchType, searchList, page) => {
  // "Build" the URL
  const url = `${BASE_URL}/${searchType}/${searchList}`;

  // Execute the search
  try {
    const response = await axios.get(url, {
      params: {
        api_key: APP_KEY,
        page: page,
      },
    });

    // Get and return and format it
    let content = null;
    if (response && response.data && response.data.results) {
      switch (searchType) {
        case 'movie':
          content = formatMovieResult(response.data.results);
          break;
        case 'tv':
          content = formatTvResult(response.data.results);
          break;
        default:
          break;
      }

      if (content != null && content.length > 0) {
        content = {
          page: response.data.page,
          totalPages: response.data.total_pages,
          totalResults: response.data.total_results,
          content
        }
      }
    }

    return content;
  } catch (error) {
    // Throw the error
    throw error;
  }
};
