export default function haversineDistance(lat1, lon1, lat2, lon2, unit = 'km') {
    // Earth's radius in different units
    const radii = {
        km: 6371,
        m: 6371e3,
        miles: 3958.8
    };

    if (!radii[unit]) {
        throw new Error("Invalid unit. Please use 'km', 'm', or 'miles'.");
    }

    const R = radii[unit];

    // Convert degrees to radians
    const toRadians = (degree) => (degree * Math.PI) / 180;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const rLat1 = toRadians(lat1);
    const rLat2 = toRadians(lat2);

    // Haversine formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(rLat1) * Math.cos(rLat2) * 
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
              
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}