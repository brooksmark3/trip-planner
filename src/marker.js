const mapboxgl = require('mapbox-gl');

const buildMarker = function(type, coordinates) {
  if (type === undefined || coordinates === undefined) {
    return false;
  } else if (type === 'activity') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
  } else if (type === 'hotel') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
  } else if (type === 'restaurant') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
  }
};

module.exports = buildMarker;
