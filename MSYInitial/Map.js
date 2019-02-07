function initMap(){
  
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });
    

     new google.maps.Marker({
      position: {lat:-26.363, lng:130.044},
      map: map,
      title: 'Hello World!'
    });

    function newMarker(lt, lg){

      new google.maps.Marker({
        position: {lat: lt, lng: lg},
        map: map,
        title: 'shop'
    });
  }
  newMarker(-27.65, 153.15)
  newMarker(-33.96365, 151.093827)
  newMarker(-35.330400, 149.179830)
  newMarker(-38.151700, 144.359300)
  newMarker(-42.833519, 147.262955)
  newMarker(-34.958591, 138.544266)
  newMarker(-32.014710, 115.926980)
  
}

 
 