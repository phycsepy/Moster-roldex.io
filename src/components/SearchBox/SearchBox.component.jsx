import React from 'react'
import '../SearchBox/SearchBox.style.css'

export const SearchBox= ({placeholder,handleChange}) => {
    return (
        <input type='search' 
        placeholder={placeholder}
        onChange={handleChange}
        className='search'
        />
    )
}
