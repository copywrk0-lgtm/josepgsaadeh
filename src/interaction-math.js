export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function ribbonProgress(top, height, viewportHeight, stickyTop = 0) {
  return clamp((stickyTop - top) / Math.max(1, height - viewportHeight + stickyTop));
}

export function nearestFrameAngle(current, frame, count = 8) {
  const angle = -(frame + .5) / count * Math.PI * 4.4;
  return angle + Math.round((current - angle) / (Math.PI * 2)) * Math.PI * 2;
}

export function editState(progress, count = 4) {
  const position = clamp(progress) * count;
  const index = Math.min(count - 1, Math.floor(position));
  const phase = Math.min(1, position - index);
  // Crossfade into the next photograph while retaining its independent wipe.
  const blend = index < count - 1 ? clamp((phase - .84) / .16) : 0;
  const reveal = clamp((phase - .08) / .68);
  return {index, blend, reveal: reveal * reveal * (3 - 2 * reveal)};
}
