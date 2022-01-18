$(document).ready(function () {
  const iceCreamFlavors = ["chocolate", "vanilla", "cookies & cream", "rocky-road", "coffee"];
  iceCreamFlavors.forEach(function (flavor) {
    $("ul#flavors").append("<li>" + flavor + "</li>");
  });
});