// We create the street view tile layer that is option for a map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{ID}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY,
      ID : "light-v10"
  });
    
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{ID}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    ID: "dark-v10"
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let myStyle = {
  color: "#ccff00",
  weight: 1
}

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/Arrock-12/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.

 L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2> <hr> <h3>" + "Destination: " + feature.properties.dst + "</h3>");  
     }  
     })
     .addTo(map);
    });