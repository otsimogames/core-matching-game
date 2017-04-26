
function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function calculateConstraint(constraint) {
  const xc = constraint.x.constant | 0;
  const yc = constraint.y.constant | 0;
  const x = constraint.x.multiplier * otsimo.game.width + xc;
  const y = constraint.y.multiplier * otsimo.game.height + yc;
  const xScale = otsimo.game.width / 1024;
  const yScale = otsimo.game.height / 768;
  const midScale = yScale / xScale;
  return {
    x: x,
    y: y,
    anchor: constraint.anchor,
    scale: yScale
  };
}


function gameVisibleName() {
  let lang = otsimo.child.language || otsimo.manifest.default_language;
  if (lang.length > 2) {
    lang = lang.substring(0, 2)
  }
  for (var i = 0; i < otsimo.manifest.metadata.length; i++) {
    var meta = otsimo.manifest.metadata[i];
    if (meta.language == lang) {
      return meta.visible_name;
    }
  }
  return '';
}


export { shuffle, calculateConstraint, gameVisibleName };