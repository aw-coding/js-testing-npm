const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room1;
    let room2;

    beforeEach(function() {
        room1 = new Room (40)
        room2 = new Room (0)
    });
    it('should have an area in square metres', function(){
        const actual = room1.area
        assert.strictEqual(actual, 40);
    })
    xit('should be able to be painted', function(){
        const actual = room2.area
        assert.strictEqual(actual, false)
    })


})
