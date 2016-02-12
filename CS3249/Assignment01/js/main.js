$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    function init_map() {
        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(40.805478, -73.96522499999998),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(40.805478, -73.96522499999998)
        });
        infowindow = new google.maps.InfoWindow({
            content: "<b>Kyle's Kitten Rental</b><br/>2880 Broadway<br/> New York"
        });
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }
    google.maps.event.addDomListener(window, 'load', init_map);
});

var toggleMenu = function(){
	var navigationMenu = document.getElementById("main-navigation");
	if(navigationMenu.className == 'open'){
		navigationMenu.className = "closed";
	} else {
		navigationMenu.className = "open";
	}
}
