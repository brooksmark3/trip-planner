const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYnJvb2tzbWFyazMiLCJhIjoiY2s3dW5rdXY2MDA2YjNwcnEzZDltajk3cSJ9.7Fh4JVKt0kTfUCgOqc2uOg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('activity', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
