module.exports = function (position, axis) {
    var positionCss = (axis === 'horizontal') ? [position, 0] : [0, position];

    if (_has3d) {
        // adds z position
        positionCss.push(0);
    }

    var translatedPosition = 'translate(' + positionCss.join(',') + ')';

    return translatedPosition;
};
