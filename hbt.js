define(function(require) {

    var Handlebars = require('handlebars');

    return {
        load: function(name, require, callback, config) {
            require(['text!' + name + '.handlebars'], function(content) {
                var template = Handlebars.compile(content);
                callback(template);
            });
        }
    };

});