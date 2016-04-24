
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function calculateConstraint(constraint) {
    let xc = constraint.x.constant | 0;
    let yc = constraint.y.constant | 0;
    let x = constraint.x.multiplier * otsimo.game.width + xc;
    let y = constraint.y.multiplier * otsimo.game.height + yc;
    return {
        x: x,
        y: y,
        anchor: constraint.anchor
    };
}

export {shuffle,calculateConstraint};