//Maggie Phifer
//Shows the closest safe places based on geolocation. Will not function without API key.


```javascript
// Function to get user's location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getSafePlaces(latitude, longitude);
    }, error => {
      console.error("Error getting location:", error);
    });
  } else {
    console.error("Geolocation not supported by this browser.");
  }
}

// Function to get safe places based on user's location
function getSafePlaces(latitude, longitude) {
  // Use the Google Places API to search for nearby safe places
  const API_KEY = "YOUR_GOOGLE_PLACES_API_KEY";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&types=police+or+hospital+or+library+or+community_center&key=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const safePlaces = data.results;
      displaySafePlaces(safePlaces);
    })
    .catch(error => {
      console.error("Error getting safe places:", error);
    });
}

// Function to display the list of safe places
function displaySafePlaces(safePlaces) {
  const safePlacesList = document.getElementById("safe-places-list");
  safePlacesList.innerHTML = "";

  safePlaces.forEach(place => {
    const listItem = document.createElement("li");
    listItem.textContent = `${place.name} - ${place.vicinity}`;
    safePlacesList.appendChild(listItem);
  });
}

// Call the function to get the user's location when the page loads
document.addEventListener("DOMContentLoaded", getLocation);
```
