import React from 'react'
import styles from '../../styles/search.module.css'
const Search = () => {
    return (
        <div className={styles.search}>
            <label>
                <input type='text' placeholder="Search partner stores in Jamshedpur" />
            </label>
        </div>
    )
}

export default Search
