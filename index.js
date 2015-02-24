'use strict';

var _ = require('starkjs-underscore');

function flatify(obj, path) {
    var sign = '.',
        endPath,
        type = _.getType(obj),
        flatObject = {};

    if (!_.isDefined(path)) {
        path = sign;
    }

    if (type === 'array' || type === 'object') {
        _.keys(obj).forEach(function (key) {
            var value = key + sign,
                newD = flatify(obj[ key ], path + value);
            _.extend(flatObject, newD);
        });

    } else {
        endPath = path.substr(1, path.length - 2);
        flatObject[ endPath ] = obj;
    }
    return flatObject;
}

function getPath(start, value, key) {
    var ref = start || {},
        paths;

    paths = key.split('.').map(function (keypart) {
        var numbericValue = parseInt(keypart, 0);
        if (!isNaN(numbericValue)) {
            keypart = numbericValue;
        }
        return keypart;
    });

    paths.forEach(function (val, index) {
        var nextPath = paths[ index + 1 ],
            isArray = _.isNumber(nextPath);

        if (_.isDefined(nextPath) && !_.isDefined(start[ val ])) {
            if (isArray) {
                start[ val ] = [];
            } else {
                start[ val ] = {};
            }
        }

        if (!_.isDefined(nextPath)) {
            start[ val ] = value;
        }

        start = start[ val ];
    });
    return ref;
}

function toObject(flatObject) {
    var result = {};
    _.reduce(flatObject, getPath, result);
    return result;
}

module.exports = {
    flatify: flatify,
    toObject: toObject
};
