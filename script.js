const MAPBOX_ACCESS_TOKEN = '';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(pos) {
  setupMap([pos.coords.longitude, pos.coords.latitude]);
}

function errorLocation() {
  setupMap([121.56, 25.03]);
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls, 'top-right');

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls, 'top-left');
}
