import './MovieCard.css';

import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  // const {key} = props

  // console.log(props)

  const { title, poster, releaseDate, rating, overview } = props;
  const shortOverview = overview.split(' ').slice(0, 34);
  shortOverview.push('...');

  const posterLink = (forPoster) => {
    if (poster === null) {
      return null;
    }
    return `https://image.tmdb.org/t/p/w500${forPoster}`;
  };

  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={posterLink(poster)} alt="Постер" />
      <div className="movie-card__information">
        <h5 className="movie-card__title">{title}</h5>
        <div className="movie-card__raiting">
          <p>{rating}</p>
        </div>
        <p className="movie-card__date">{releaseDate}</p>
        <ul className="mivie-card__categorys-list" type="none">
          <li className="movie-card__category">Драма</li>
          <li className="movie-card__category">Драма</li>
        </ul>
        <p className="movie-card__overview">{shortOverview.join(' ')}</p>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  releaseDate: 'Дата релиза неизвестна',
  rating: 0,
  overview: 'Описание отсутствует',
  poster: null,
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,

  poster: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null])]),

  releaseDate: PropTypes.string,
  rating: PropTypes.number,
  overview: PropTypes.string,
};

export default MovieCard;
