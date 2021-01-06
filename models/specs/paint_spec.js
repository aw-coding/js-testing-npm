const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){
    let paint;

    beforeEach(function() {
        paint = new Paint (20)
    });
    it('should be able to check if it is empty', function(){
        paint.volume = 0
        const actual = paint.volume
        assert.strictEqual(actual, 0);
    
    })
    it('should have 20 litres', function(){
        const actual = paint.volume
        assert.strictEqual(actual, 20);
    })
    it('should be able to empty itself', function(){
        const actual = paint.empty()
        assert.strictEqual(actual, 0);
    
    })


})