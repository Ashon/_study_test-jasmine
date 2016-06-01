
describe('hello-jasmine.js', function() {

    var helloJasmine;

    beforeEach(function() {
        helloJasmine = require('../../src/js/hello-jasmine.js');
    });

    it('should not be undefined', function() {
        expect(typeof helloJasmine).not.toBe('undefined');
    });

    it('should have getHello', function() {
        expect(typeof helloJasmine.getHello).not.toBe('undefined');
        expect(typeof helloJasmine.getHello).toBe('function');
    });

    it('shold returns hello when getHello is called.', function() {
        expect(helloJasmine.getHello()).toBe('hello');
    });
});
