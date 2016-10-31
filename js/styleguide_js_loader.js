(function ($) {
  "use strict";
  var customJsInjected = false;
  $(window).bind("styleguide:onRendered", function(e) {
    if(customJsInjected) return;
    // ATTENTION! Don't change this file within th sc5_styleguide/js folder,
    // IT WILL BE OVERWRITTEN EVERYTIME YOU EXECUTE gulp styleguide
    // Edit this file in the theme's js folder instead and
    // execute gulp copyjs or gulp styleguide after you modified it.
    // Add Scripts for components here
    var scripts = [
      '//code.jquery.com/jquery-migrate-1.2.1.min.js',
      'js/styleguide_init.js'
      
    ];
    for (var i = 0; i < scripts.length; i++) {
      var script = document.createElement('script');
      script.setAttribute('src', scripts[i]);
      script.setAttribute('type', 'text/javascript');
      script.async = false;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    var reloadInProgress = false, reloadPage = function(){
      if(!reloadInProgress){ window.location.reload(true); reloadInProgress=true; }
    };
    $('.ng-scope').each(function(){
      angular.element(this).scope().$on('progress end', reloadPage);
    });
    customJsInjected=true;
  });
})(jQuery);
