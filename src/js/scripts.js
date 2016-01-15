(function ($, window, document, undefined) {

  'use strict';

  $(function () {
//    if ( ! Modernizr.touch ) {
//      $( '#background' ).YTPlayer();
//    }

    if ( ! Modernizr.svg ) {
      var $logo = $("#logo");
      $logo.attr("src", $logo.attr("src").replace(/svg$/, 'png'));
    }

  });

})(jQuery, window, document);
