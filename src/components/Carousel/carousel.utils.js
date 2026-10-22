export function normalizeIndex(index, length, loop = true) {
  if (length <= 1) return 0
  if (!loop) return Math.max(0, Math.min(index, length - 1))
  return ((index % length) + length) % length
}

export function getSlidesToShow(width, requested, count) {
  const limit = width < 600 ? 1 : width < 900 ? 2 : requested
  return Math.max(1, Math.min(requested, limit, count))
}

export function getMaxIndex(count, visibleCount = 1) {
  return Math.max(0, count - visibleCount)
}

export function getSlideOffset(index, activeIndex, count, loop = true) {
  let offset = index - activeIndex
  if (loop && count > 2) {
    if (offset > count / 2) offset -= count
    if (offset < -count / 2) offset += count
  }
  return offset
}
