export function createFooterCanvas() {
  const canvas = document.getElementById('footer-canvas');
  const ctx = canvas.getContext('2d');

  // Function to generate a random number within a range
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Array that will contain all of the rectangles and their properties
  let rectangles = [];

  // Colors
  const colors = [
    '#F2BC1C',
    '#FEED25',
    '#EA5EFC',
    '#F5C461',
    '#EDA8FA',
    '#9C64FC',
  ];

  // Set body background to one of the colors you want to use
  document.body.style.backgroundColor = '#000000';

  // Function to create rectangle data
  function initRectangles() {
    // Clear previous rectangle data
    rectangles = [];

    // Amount of rectangles based on the screen size
    let rectangleCount = window.innerWidth / 100;

    // Loop the code inside as many times as there are rectangles
    for (let i = 0; i < rectangleCount; i++) {
      // Set rectangle width and height
      let width = window.innerWidth * 1.5; // 150vw
      let height = window.innerHeight * 0.5; // 50vh

      // Set random rectangle position inside the canvas on X axis
      let x = randomBetween(0, canvas.width - width);
      // Set random rectangle position inside the canvas on Y axis
      let y = randomBetween(0, canvas.height - height);

      // Set fixed velocity angle of -15 or 15 degrees
      let angle = Math.random() < 0.5 ? -15 : 15; // Choose either -15 or 15
      angle = angle * (Math.PI / 180); // Convert to radians
      let speed = randomBetween(
        window.innerWidth / 500,
        window.innerWidth / 250
      );
      let dx = Math.cos(angle) * speed;
      let dy = Math.sin(angle) * speed;

      // Set random color
      let color = colors[Math.floor(Math.random() * colors.length)];

      // Add the new rectangle data inside the rectangles array
      rectangles.push({
        x,
        y,
        dx,
        dy,
        width,
        height,
        color,
        angle, // Store rotation angle
      });
    }
  }

  // Draw the rectangles with our new values
  function drawRectangles(rect) {
    ctx.save();
    // Translate to rectangle center
    ctx.translate(rect.x + rect.width / 2, rect.y + rect.height / 2);
    // Rotate by the rectangle's angle
    ctx.rotate(rect.angle);
    // Set fill style with the rectangle color
    ctx.fillStyle = rect.color;
    // Draw rectangle centered on the translated origin
    ctx.fillRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
    ctx.restore();
  }

  // Animation function
  function animate() {
    // Create animation by rerunning the animate function over and over
    requestAnimationFrame(animate);
    // Clear all previous drawn elements from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Loop through all of the rectangles
    rectangles.forEach((rect) => {
      // If the rectangle reaches the edge of the canvas on the X axis on either side
      if (rect.x + rect.width > canvas.width || rect.x < 0) {
        // Reverse the velocity of the rectangle (have it 'bounce off' in the other direction)
        rect.dx = -rect.dx;
      }
      // If the rectangle reaches the edge of the canvas on the Y axis on either side
      if (rect.y + rect.height > canvas.height || rect.y < 0) {
        // Reverse the velocity of the rectangle (have it 'bounce off' in the other direction)
        rect.dy = -rect.dy;
      }
      // In any other case, move the rectangle in the initial direction
      rect.x += rect.dx;
      rect.y += rect.dy;
      // Move the rectangle by redrawing them over and over inside the animation
      drawRectangles(rect);
    });
  }

  // Function that makes the canvas always fullscreen
  // We will make it a bit larger than the screen size
  function resizeCanvas() {
    canvas.width = window.innerWidth * 1.5;
    canvas.height = window.innerHeight * 1.5;
    initRectangles();
  }

  // Make canvas full width on page load
  resizeCanvas();

  // Make canvas full width every time the screen is resized
  window.addEventListener('resize', resizeCanvas);

  // Create the rectangle data on the page load
  initRectangles();

  // Run the animation on page load
  animate();
}
