function collision(x1, y1, radius1, x2, y2, radius2) {
    return Math.hypot((x1 - x2), (y1 - y2))<radius1+radius2
  }