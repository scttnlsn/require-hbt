require-hbt
===========

An AMD loader plugin for Handlebars templates.

Usage
-----

Suppose we have the following template at `templates/hello.handlebars`:

    Hello {{ name }}!

Then we can compile it like so:

    require(['hbt!templates/hello', function(template) {

        template({ name: 'World' }); // => 'Hello World!'

    });

That's all for now.