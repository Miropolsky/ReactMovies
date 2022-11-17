import styles from './Main.module.scss';
import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';

// export default function Main() {
//     return (
//         <main className={`${styles.container} ${styles.content}`}>
//             Main
//         </main>
//     )
// }
const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loadin: true });
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className={`${styles.container} ${styles.content}`}>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <MovieList movies={movies} />}
            </main>
        );
    }
}
