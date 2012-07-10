var assert = chai.assert;

describe('Hbt', function() {

    describe('when requiring template', function() {
        var template;

        beforeEach(function(done) {
            require(['hbt!templates/text'], function(t) {
                template = t;
                done();
            });
        });

        it('compiles template', function() {
            assert.equal(typeof template, 'function');
        });

        it('renders propertly', function() {
            var content = template({ text: 'foo' });
            assert.equal(content, 'foo');
        });
    });

    describe('when configuring', function() {
        it('uses given extension', function(done) {
            require.config({
                hbt: {
                    extension: 'html'
                }
            });

            require(['hbt!templates/extension'], function(template) {
                assert.equal(typeof template, 'function');
                assert.equal(template(), 'ok');
                done();
            });
        });
    });

});