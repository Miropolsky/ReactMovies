import React from 'react';
import styles from './Search.module.scss';

export default class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (e) => {
        this.setState(
            () => ({
                type: e.target.dataset.type,
            }),
            () => this.props.searchMovies(this.state.search, this.state.type)
        );
    };
    render() {
        return (
            <div className='col s12'>
                <div className='input-field'>
                    <input
                        id='email_inline'
                        type='search'
                        className='validate'
                        placeholder='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className={`btn ${styles.search_btn}`}
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
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
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label className={styles.labelRadio}>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Only series</span>
                    </label>
                    <label className={styles.labelRadio}>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Only movie</span>
                    </label>
                </div>
            </div>
        );
    }
}
