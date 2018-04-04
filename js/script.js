$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items: 2,
        loop:true,
        center: true,
        margin: 0
  });

  $("#rooms").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    items: 1,
    center: true,
    margin: 0
});
});