module.exports = function (position, axis) {
    var positionCss = (axis === 'horizontal') ? [position, 0] : [0, position];
    var translatedPosition = 'translate(' + positionCss.join(',') + ')';

    return translatedPosition;
};
