export default function DistanceFilter({ setFilteredDistance, filteredDistance }) {
    return (
        <div className="distanceContainer">
            <h3>Filter by distance</h3>
            <div className="distanceInputContainer">
                <div className="distanceDisplay">{filteredDistance}</div>
                <input
                    type="range"
                    min="0"
                    max="300"
                    value={filteredDistance}
                    onChange={(e) => {
                        const num = Number(e.target.value);
                        setFilteredDistance(num);
                    }}
                />
            </div>
        </div>
    );
}
