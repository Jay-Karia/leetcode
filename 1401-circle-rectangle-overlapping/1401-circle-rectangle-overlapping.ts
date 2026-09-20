function checkOverlap(
  radius: number, // 1
  xCenter: number, // 1
  yCenter: number, // 1
  x1: number, // -3
  y1: number, // -3
  x2: number, // 3
  y2: number // 3
): boolean {
  const rectangleEdges = [
    [x1, y2], // top-left
    [x2, y2], // top-right
    [x2, y1], // bottom-right
    [x1, y1], // bottom-left
  ];

  console.log(rectangleEdges)

  // Every point on the left side of the rectangle
  const maxLeft = Math.max(rectangleEdges[0][1], rectangleEdges[3][1]);
  const minLeft = Math.min(rectangleEdges[0][1], rectangleEdges[3][1]);
  for (let i = minLeft; i <= maxLeft; i++) {
    // Check if the point is inside the circle
    const distance = Math.sqrt((x1 - xCenter) ** 2 + (i - yCenter) ** 2);
    if (distance <= radius) {
      return true;
    }

    // Check if circle is inside rectangle
    if (
      xCenter - radius >= x1 &&
      xCenter + radius <= x2 &&
      yCenter - radius >= y1 &&
      yCenter + radius <= y2
    ) {
      return true;
    }
  }

  // Every point on the top side of the rectangle
  const maxTop = Math.max(rectangleEdges[0][0], rectangleEdges[1][0]);
  const minTop = Math.min(rectangleEdges[0][0], rectangleEdges[1][0]);
  for (let i = minTop; i <= maxTop; i++) {
    // Check if the point is inside the circle
    const distance = Math.sqrt((i - xCenter) ** 2 + (y2 - yCenter) ** 2);
    if (distance <= radius) {
      return true;
    }
    // Check if circle is inside rectangle
    if (
      xCenter - radius >= x1 &&
      xCenter + radius <= x2 &&
      yCenter - radius >= y1 &&
      yCenter + radius <= y2
    ) {
      return true;
    }
  }

  // Every point on the right side of the rectangle
  const maxRight = Math.max(rectangleEdges[1][1], rectangleEdges[2][1]);
  const minRight = Math.min(rectangleEdges[1][1], rectangleEdges[2][1]);
  for (let i = minRight; i <= maxRight; i++) {
    // Check if the point is inside the circle
    const distance = Math.sqrt((x2 - xCenter) ** 2 + (i - yCenter) ** 2);
    if (distance <= radius) {
      return true;
    }
    // Check if circle is inside rectangle
    if (
      xCenter - radius >= x1 &&
      xCenter + radius <= x2 &&
      yCenter - radius >= y1 &&
      yCenter + radius <= y2
    ) {
      return true;
    }
  }

  // Every point on the bottom side of the rectangle
  const maxBottom = Math.max(rectangleEdges[2][0], rectangleEdges[3][0]);
  const minBottom = Math.min(rectangleEdges[2][0], rectangleEdges[3][0]);
  for (let i = minBottom; i <= maxBottom; i++) {
    // Check if the point is inside the circle
    const distance = Math.sqrt((i - xCenter) ** 2 + (y1 - yCenter) ** 2);
    if (distance <= radius) {
      return true;
    }
    // Check if circle is inside rectangle
    if (
      xCenter - radius >= x1 &&
      xCenter + radius <= x2 &&
      yCenter - radius >= y1 &&
      yCenter + radius <= y2
    ) {
      return true;
    }
  }
  return false;
}

// console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1)); // true
// console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1)) // false
// console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1)) // true
console.log(checkOverlap(1, 1, 1, -3, -3, 3, 3)) // true
