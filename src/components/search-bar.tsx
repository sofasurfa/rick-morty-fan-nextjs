import React, { memo } from 'react'

interface SearchBarProps {
    searchTerm: string
    nameFilter: string
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
// Memoed component meansing it will only rebuild in case props change.
const SearchBar = memo(function SearchBar({ nameFilter, searchTerm, onSearchChange }: SearchBarProps) {
    console.log('SearchBar rendered')
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder={`Filter ${nameFilter}`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
    )
})

export default SearchBar


