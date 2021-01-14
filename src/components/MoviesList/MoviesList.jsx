import './MoviesList.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Spin } from 'antd';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = (props) => {
  const { movies } = props;
  const { loading } = props;

  const createMovieCards = () => {
    if (!movies) {
      return null;
    }

    const movieCards = movies.map((el) => (
      <li key={el.id} className="movie-list__item">
        <MovieCard
          title={el.original_title}
          overview={el.overview}
          poster={el.poster_path}
          releaseDate={el.release_date}
          rating={el.vote_average}
        />
      </li>
    ));
    return movieCards;
  };

  if (loading) {
    return <Spin size="large" className="spin_scale" />;
  }

  return (
    <ul className="movies-list" type="none">
      {createMovieCards()}
    </ul>
  );
};

MoviesList.defaultProps = {
  movies: null,
  loading: false,
};

MoviesList.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.oneOf([null])]),
  loading: PropTypes.bool,
};

export default MoviesList;
