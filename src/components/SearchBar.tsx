import { useEffect, useState } from "react"
import styles from "../styles/SearchBar.module.css"
import searchProductByName from "utils/searchProductByName"

const SearchBar = ({productList, setFilteredProducts}) => {

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const filteredList = searchProductByName(productList, searchQuery)
        setFilteredProducts(filteredList)
    }, [searchQuery])

    return (
        <div className={styles.SearchBarContainer}>
            <svg 
                className={styles.SearchBarIcon}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            <input
                value={searchQuery}
                placeholder="Buscar"
                className={styles.SearchBarInput}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchBar