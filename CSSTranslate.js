module.exports = function (position, axis) {
    var positionCss = (axis === 'horizontal') ? [position, 0] : [0, position];
    var transitionProp = 'translate';
    var translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};
