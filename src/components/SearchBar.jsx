import { useState } from 'react';

export default function SearchBar({setSearchTerm}) {
    const [draft, setDraft] = useState('');
    const handleClick = () => {
        setSearchTerm(draft)
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };
    return (
        <div className="searchContainer">
            <input 
            value={draft} 
            type="text" 
            className="searchBar" 
            onChange={(e) => {setDraft(e.target.value)}}
            onKeyDown={handleEnter}
            />
            <button 
            className="submitSearchButton" 
            onClick={handleClick}
            >
            Search
            </button>
        </div>
    )
}