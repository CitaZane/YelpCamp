const parsedCampground = JSON.parse(campground);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: parsedCampground.geometry.coordinates,
    zoom: 10 // starting zoom
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

const marker = new mapboxgl.Marker()
    .setLngLat(parsedCampground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${parsedCampground.title}</h3><p>${parsedCampground.location}</p>`
            )
    )
    .addTo(map);



