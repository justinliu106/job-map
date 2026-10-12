import { useState } from 'react';
import DistanceFilter from './DistanceFilter';

export default function SideBarFilter({ setFilteredDistance, filteredDistance }) {
    const [filterOpen, setFilterOpen] = useState(false);
    function handleClick() {
        setFilterOpen(!filterOpen);
    }
    return (
        <div className="filterButtonContainer">
            <button className="filterButton" onClick={handleClick}>
                Filter
            </button>
            {filterOpen && (
                <div className="filterPopup">
                    <DistanceFilter setFilteredDistance={setFilteredDistance} filteredDistance={filteredDistance}>
                    </DistanceFilter>
                </div>
            )}
        </div>
    )
}