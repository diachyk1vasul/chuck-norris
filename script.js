$(document).ready(function() {
  $("#btn").click(function() {
      $.get("https://api.chucknorris.io/jokes/random", function( data, status ) {
          $("<img src=" + data.icon_url + ">").appendTo(".chuck");
          $("<p>" + data.created_at + "</p>").appendTo(".chuck")
          $("<p>" + data.value + "</p>").appendTo(".chuck");
          $("#btn").click(function() {
              $(".chuck").empty();
          })
          });
      });
  });