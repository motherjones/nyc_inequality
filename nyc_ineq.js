require.config({
    "baseUrl" : "http://assets.motherjones.com/interactives/projects/2013/08/nyc-inequality/",
    "paths": {
        "jquery": 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min',
    }
});

requirejs.config({
    shim: {
        'jquery-ui-1.8.13.custom.min' : ['jquery'],
        'jquery.ui.touch-punch.min' : ['jquery'],
        'jquery.beforeafter-1.4.min' : ['jquery'],
    }
});

require([
        "jquery",
        "jquery-ui-1.8.13.custom.min",
        "jquery.ui.touch-punch.min",
        "jquery.beforeafter-1.4.min"
], function(jquery) {
    $('.nyc-before-after').each(function() {
        $(this).beforeAfter();
    });
}); 
