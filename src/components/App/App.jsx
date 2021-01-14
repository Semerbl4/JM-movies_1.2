import './App.css';
import 'antd/dist/antd.css';

import React from 'react';

import { Alert } from 'antd';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

export default class App extends React.Component {
  state = {
    movies: null,
    loading: true,
    error: false,
  };

  online = window.navigator.onLine;

  componentDidMount() {
    this.moviesRequest();
  }

  moviesRequest = async () => {
    // this.setState(state => ({loading: !state.loading}));
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c33f54366ccf34ec81775c2d46bea63e&query=star wars`
    );
    // console.log(movies)
    if (movies.ok) {
      movies = await movies.json();
      this.setState((state) => ({ movies: movies.results, loading: !state.loading }));
    } else {
      this.setState({ error: movies.status });
    }
    // console.log(this.state)
  };

  render() {
    const { movies } = this.state;
    const { loading } = this.state;
    const { error } = this.state;

    // console.log(this.online)

    if (!this.online) {
      return <Alert type="warning" message="Ваш интернет приказал долго жить (Отсутствует соединение сети)" />;
    }

    return (
      <section className="app">
        <Filters />
        <Search />
        {error ? (
          <Alert message={`Произошла ошибка ${error}`} type="error" />
        ) : (
          <MoviesList movies={movies} loading={loading} />
        )}
      </section>
    );
  }
}
