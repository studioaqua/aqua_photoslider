(function ($) {
  Drupal.behaviors.aqua_photoslider = {
    attach: function(context, settings) {

      $('.aqua-photoslider').bxSlider({
        pagerCustom: '#aqua-photoslider-thumbs-pager',
        infiniteLoop: false,
        controls: false,
      });

    }
  }

})(jQuery);
