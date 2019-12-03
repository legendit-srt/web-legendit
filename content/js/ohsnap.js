function ohSnap(text, options) {
  var defaultOptions = {
    'color'       : null,    
    'icon'        : null,    
    'duration'    : '10000',  
    'container-id': 'ohsnap', 
    'fade-duration': 'fast',  
  }

  options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

  var $container = $('#'+options['container-id']),
    icon_markup = "",
    color_markup = "";

    if (options.icon) {
        icon_markup = "<span class='" + options.icon + "'></span> ";
    }

    if (options.color) {
      color_markup = 'alert-' + options.color;
    }

    var html = $('<div class="alert ' + color_markup + '">' + icon_markup + text + '</div>').fadeIn(options['fade-duration']);
   
    $container.append(html);
   
    html.on('click', function() {
        ohSnapX($(this));
    });
   
    setTimeout(function() {
        ohSnapX(html);
    }, options.duration);
}

function ohSnapX(element, options) {
    defaultOptions = {
      'duration': 'fast'
    }

    options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

    if (typeof element !== "undefined") {
        element.fadeOut(options.duration, function() {
            $(this).remove();
        });
    } else {
        $('.alert').fadeOut(options.duration, function() {
            $(this).remove();
        });
    }
}
