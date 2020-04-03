console.log('token: ' + mapBoxMapsToken);

mapboxgl.accessToken = mapBoxMapsToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 16,
});

//////////////

var restaurants = [{
    name: 'El Paisa',
    number: '(214) 366-9789',
    longLat: [-96.881240, 32.860210]

},
    {
        name: 'Burguesa Burger',
        number: '(214) 748-7376',
        longLat: [-96.834760, 32.770510]
    },
    {
        name: 'Buca di Beppo Italian Restaurant',
        number: '(214) 361-8462',
        longLat: [-96.772230, 32.872370]
    }


];

function makeMarker(array) {
    var popup = new mapboxgl.Popup()
        .setHTML(array.name + "<br>" + array.number);

    var marker = new mapboxgl.Marker()
        .setLngLat(array.longLat)
        .setPopup(popup)
        .addTo(map);

}

restaurants.forEach(makeMarker);

//////////

geocode("Dallas, Texas", mapBoxMapsToken).then(function(result) {
    console.log(result)
    map.setZoom(8)
    map.setCenter(result);

});


/////////

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
