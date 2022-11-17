import Movie from '../Movie/Movie';
import styles from './MovieList.module.scss';

export default function MovieList(props) {
    const { movies } = props;
    return (
        <div className={styles.movieList}>
            {movies ? (
                movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
