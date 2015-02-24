'use strict';

var chai = require('chai'),
    expect = chai.expect,
    tool = require('../index');

describe('flatify and ...', function () {
    it('should return the same structure', function () {
        var deepOriginal = {
                first: [ 0, 1, [ 2, 3 ] ], second: [
                    {
                        c: [ 1, [ 2, 3 ] ], d: [
                        {
                            last: 1
                        }
                    ], f: 'g'
                    }
                ], a: {
                    b: {
                        c: 1
                    }
                }
            },
            flat = tool.flatify(deepOriginal),
            reborn = tool.toObject(flat);
        expect(deepOriginal).to.deep.equal(reborn);
    });
});
