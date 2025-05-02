// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: -0.39094933041195, lng: -10.320312 };

  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 2,
    center: position,
    mapId: "DEMO_MAP_ID",
    
  });
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
  const infoWindow = new InfoWindow();
  const Mountainpins = new PinElement({
    glyphColor: 'white',
  });
  const YosemiteMarker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.865101, lng: -119.538330 },
    content: Mountainpins.element,
  });
  YosemiteMarker.addListener("click", (event) => {
    const positionof = YosemiteMarker.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Yosemite");
    infoWindow.open(YosemiteMarker.map, YosemiteMarker);
  });

  const Citypin = new PinElement({
    glyphColor: 'yellow',
  });
  const FlorenceMarker = new AdvancedMarkerElement({
    map,
    position: { lat: 43.76791780, lng: 11.25237920},
    content: Citypin.element,
  });
  FlorenceMarker.addListener("click", (event) => {
    const positionof = FlorenceMarker.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Florence");
    infoWindow.open(FlorenceMarker.map, FlorenceMarker);
  });

  const SFpin = new PinElement({
    glyphColor: 'blue',
  });
  const SFMarker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.773972, lng: -122.431297},
    content: SFpin.element,
  });
  SFMarker.addListener("click", (event) => {
    const positionof = SFMarker.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("San Francisco");
    infoWindow.open(SFMarker.map, SFMarker);
  });

  const FKeyspin = new PinElement({
    glyphColor: 'orange',
  });
  const FKeys = new AdvancedMarkerElement({
    map,
    position: { lat: 24.691402, lng: -81.189682},
    content: FKeyspin.element,
  });
   FKeys.addListener("click", (event) => {
    const positionof = FKeys.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Florida Keys");
    infoWindow.open(FKeys.map, FKeys);
  });

  const Limapin = new PinElement({
    glyphColor: 'Brown',
  });
  const Lima = new AdvancedMarkerElement({
    map,
    position: { lat: -12.04318, lng: -77.02824},
    content: Limapin.element,
  });
   Lima.addListener("click", (event) => {
    const positionof = Lima.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Lima");
    infoWindow.open(Lima.map, Lima);
  });

  const Montepin = new PinElement({
    glyphColor: 'Pink',
  });
  const Monte = new AdvancedMarkerElement({
    map,
    position: { lat: 43.740070, lng: 7.426644},
    content: Montepin.element,
  });
   Monte.addListener("click", (event) => {
    const positionof = Monte.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Monte Carlo");
    infoWindow.open(Monte.map, Monte);
  });

  const Qpin = new PinElement({
    glyphColor: 'Purple',
  });
  const Q = new AdvancedMarkerElement({
    map,
    position: { lat: 20.58879320, lng: -100.3898881},
    content: Qpin.element,
  });
   Q.addListener("click", (event) => {
    const positionof = Q.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Querétaro");
    infoWindow.open(Q.map, Q);
  });

  const Beihaipin = new PinElement({
    glyphColor: 'Green',
  });
  const Beihai = new AdvancedMarkerElement({
    map,
    position: { lat: 21.48333, lng: 109.1},
    content: Beihaipin.element,
  });
   Beihai.addListener("click", (event) => {
    const positionof = Beihai.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Beihai");
    infoWindow.open(Beihai.map, Beihai);
  });

  const zanzipin = new PinElement({
    glyphColor: 'Turquoise',
  });
  const zanzi = new AdvancedMarkerElement({
    map,
    position: { lat: -6.16394, lng: 39.19793},
    content: zanzipin.element,
  });
  zanzi.addListener("click", (event) => {
    const positionof = zanzi.position;
    map.panTo(positionof);
    map.setZoom(8);
    infoWindow.close();
    infoWindow.setContent("Zanzibar");
    infoWindow.open(zanzi.map, zanzi);
  });
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.marker.AdvancedMarkerElement({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
    }
}


initMap();

