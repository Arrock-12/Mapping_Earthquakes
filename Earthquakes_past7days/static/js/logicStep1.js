// Check if code is working
console.log("working!!!")

// We create the street view tile layer that is option for a map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{ID}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    ID: "satellite-streets-v11"
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Satellite: satellite
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let myStyle = {
  color: "#ccff00",
  weight: 1
}

// Retrieve the earthquake GeoJSON data
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data.
d3.json(earthquakes).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
  // style: myStyle,
  // onEachFeature: function(feature, layer) {
  //   layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2> <hr> <h3>" + "Destination: " + feature.properties.dst + "</h3>");  
  //    }  
  //    })
  //    .addTo(map);
  //   });