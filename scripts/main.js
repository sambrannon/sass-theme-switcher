$(document).ready(function(){

  var themes = [
    {
      id: "theme-01",
      path: "./css/themes/theme-01.css"
    },
    {
      id: "theme-02",
      path: "./css/themes/theme-02.css"
    },
    {
      id: "theme-03",
      path: "./css/themes/theme-03.css"
    },
    {
      id: "theme-04",
      path: "./css/themes/theme-04.css"
    }
  ]

  // Load first theme right away
  $('head').append('<link id="theme-sheet" rel="stylesheet" type="text/css" href="' + themes[0]['path'] + '">');

  $('button[id^=theme-]').on('click', function(){

    console.log(themes);
    // set id from button id
    var id = $(this).attr('id');

    console.log(id);

    // wipe out theme link tag
    $('#theme-sheet').remove();

    // Loop through each theme in array
    $.each(themes, function(){

      // if theme id matches clicked button's id, set link tag
      if( this.id == id ){
        $('head').append('<link id="theme-sheet" rel="stylesheet" type="text/css" href="' + this.path + '">');
      }
    });

  })

});