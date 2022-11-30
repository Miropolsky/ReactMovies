import React, { useState } from 'react';
import styles from './Search.module.scss';

export default function Search({ searchMovies = Function.prototype }) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    };
    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    };
    return (
        <div className='col s12'>
            <div className='input-field'>
                <input
                    id='email_inline'
                    type='search'
                    className='validate'
                    placeholder='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className={`btn ${styles.search_btn}`}
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
            </div>
            <div className={styles.radios}>
                <label className={styles.labelRadio}>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label className={styles.labelRadio}>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Only series</span>
                </label>
                <label className={styles.labelRadio}>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Only movie</span>
                </label>
            </div>
        </div>
    );
}
