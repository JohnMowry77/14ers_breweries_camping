// // Chart Params
// var svgWidth = 960;
// var svgHeight = 500;

// var margin = { top: 20, right: 40, bottom: 60, left: 50 };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file


// function createFeatures(earthquakeData) {
//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   // https:leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
// 	function onEachFeature(feature, layer) {
// 		layer.bindPopup("<h3>" + feature.properties.place + //location
// 			"</h3><hr><p>" + new Date(feature.properties.time) + "</p" //time of day ISO 
// 			+"<p>><b>Magnitude:" + feature.properties.mag + "<b></p>"); //gives you magnitude 
// }


// 	var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/light-v10',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// var outdoorsMap =L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/outdoors-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// var satelliteMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 18,
// id: 'mapbox/satellite-v9',
// tileSize: 512,
// zoomOffset: -1,
// accessToken: API_KEY
// });
// initialize the map on the "map" div with a given center and zoom


var myMap= L.map('mapid').setView([38.53923062275447, -105.99221539654775],8);


// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json("/Resources/mountains_db.json").then(function(data) {
  var mt_lats = []
  var mt_longs = []
  var mts = []
  for(i=0; i<data.length; i++) {
    mt_longs.push(data[i]["Peak Longitude"]);
    mt_lats.push(data[i]["Peak Latitude"]);
  
  var marker = L.marker([mt_lats[i], mt_longs[i]], {
  title: "My First Marker"
}).addTo(myMap).bindPopup(`<br><b>Mountain Peak: ${data[i]["Mountain Peak"]}</b>	<br>Mountain Range: ${data[i]["Mountain Range"]}	<br>Elevation_ft: ${data[i]["Elevation_ft"]}	<br>fourteener: ${data[i]["fourteener"]}	<br>Prominence_ft: ${data[i]["Prominence_ft"]}	<br>Isolation_mi: ${data[i]["Isolation_mi"]}	<br>Peak Longitude: ${data[i]["Peak Longitude"]}	<br>Peak Latitude: ${data[i]["Peak Latitude"]}	<br>Standard Route: ${data[i]["Standard Route"]}	<br>Standard Route Distance (miles): ${data[i]["Standard Route Distance (miles)"]}	<br>Elevation Gain_ft: ${data[i]["Elevation Gain_ft"]}	<br>Difficulty: ${data[i]["Difficulty"]}	<br>Traffic Low: ${data[i]["Traffic Low"]}	<br>Traffic High: ${data[i]["Traffic High"]}	<br>photo: ${data[i]["photo"]}`);}});



d3.json("/Resources/everything_14ers_db.json").then(function(data) {
  console.log(data)
var camp_lats = []
var camp_longs = []
for(i=0; i<data.length; i++) {
  camp_longs.push(data[i]["Campsite Longitude"]);
  camp_lats.push(data[i]["Campsite Latitude"]);
  var greenIcon = L.icon({
    iconUrl: 'camp.png',
    iconSize: [10, 10]
  });
  var circle = L.marker([camp_lats[i], camp_longs[i]], {
   icon: greenIcon}
    ).addTo(myMap).bindPopup(`<br>${data[i]["name"]}</br>`)
  };
});

