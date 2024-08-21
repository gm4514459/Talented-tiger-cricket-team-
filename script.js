// Initialize and add the map
function initMap() {
    // Create a map centered on an initial location
    const initialLocation = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: initialLocation,
    });

    // Array of locations to display at different times
    const locations = [
        { lat: -34.397, lng: 150.644, time: 0 },     // 0 seconds
        { lat: -35.297, lng: 149.644, time: 10 },    // 10 seconds
        { lat: -36.297, lng: 148.644, time: 20 }     // 20 seconds
    ];

    // Function to update the map
    function updateMap(index) {
        if (index >= locations.length) return; // Stop if out of bounds

        const location = locations[index];
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
        });

        map.setCenter(marker.getPosition());

        // Move to the next location after the specified time
        setTimeout(() => updateMap(index + 1), location.time * 1000);
    }

    // Start updating the map
    updateMap(0);
}

// Load the map
window.onload = initMap;
