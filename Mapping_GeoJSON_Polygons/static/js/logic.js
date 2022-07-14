// We create the street view tile layer that is option for a map.
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{ID}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY,
      ID : "streets-v11"
  });
    
// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{ID}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    ID: "satellite-v9"
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: street,
  Satellite: satellite
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [street]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let myStyle = {
  color: "#1c7db7",
  weight: 1,
  fillColor: "#f2f707"
}

// Accessing the airport GeoJSON URL
let torontoHood = "https://raw.githubusercontent.com/Arrock-12/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
d3.json(torontoHood).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.

  L.geoJSON(data, {
    style:myStyle
  }).addTo(map);
});
    
