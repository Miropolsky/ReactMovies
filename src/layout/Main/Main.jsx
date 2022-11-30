import styles from './Main.module.scss';
import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };
    return (
        <main className={`${styles.container} ${styles.content}`}>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <MovieList movies={movies} />}
        </main>
    );
}
