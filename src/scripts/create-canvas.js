export function createCanvas() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Function to generate a random number within a range
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Array that will contain all of the circles and their properties
  let circles = [];

  //Colors
  const colors = [
    '#F2BC1C',
    '#FEED25',
    '#EA5EFC',
    '#F5C461',
    '#EDA8FA',
    '#9C64FC',
    '#14161F',
  ];

  //Set body background to one of the colors you want to use
  document.body.style.backgroundColor = '#211951';

  //Function to create a circle data
  function initCircles() {
    //Clear previous circle data
    circles = [];

    //Ammount of circles based on the screen size
    let circleCount = window.innerWidth / 100;

    //Loop the code inside as many times as there are circles
    for (let i = 0; i < circleCount; i++) {
      //Set circle radius
      let radius = window.innerWidth / 4;

      //Set random circle position inside the canvas on X axis
      let x = randomBetween(radius, canvas.width - radius);
      //Set random circle position inside the canvas on Y axis
      let y = randomBetween(radius, canvas.width - radius);

      //Set random velocity on X axis (speed as whicn the circle moves)
      //Also based on the screen size
      let dx = randomBetween(
        window.innerWidth / -2000,
        window.innerWidth / 2000
      );
      //Set random velocity on Y axis (speed as whicn the circle moves)
      let dy = randomBetween(
        window.innerWidth / -2000,
        window.innerWidth / 2000
      );

      //Set random color
      let color = colors[Math.floor(Math.random() * colors.length)];

      //Add the new circule data inside the circles array
      circles.push({
        x,
        y,
        dx,
        dy,
        radius,
        color,
      });
    }
  }

  //Draw the circles with our new values
  function drawCircles(circle) {
    //Begin circle path
    ctx.beginPath();
    //Create circle with previously established parameters
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    //Create a fill with the previously established color
    ctx.fillStyle = circle.color;
    //Fill the circle
    ctx.fill();
    //Close the circle path
    ctx.closePath();
  }

  //Animation function
  function animate() {
    //Create animation by rerunning the animate function overand over
    requestAnimationFrame(animate);
    //Clear all previous drawn elements from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Loop through all of the circles
    circles.forEach((circle) => {
      //If the circle reaches the edge of the canvas on the X axis on either side
      if (
        circle.x + circle.radius > canvas.width ||
        circle.x - circle.radius < 0
      ) {
        //Reverse the velocity of the circle (have it 'bounce off' in the other direction)
        circle.dx = -circle.dx;
      }
      //If the circle reaches the edge of the canvas on the Y axis on either side
      if (
        circle.y + circle.radius > canvas.height ||
        circle.y - circle.radius < 0
      ) {
        //Reverse the velocity of the circle (have it 'bounce off' in the other direction)
        circle.dy = -circle.dy;
      }
      //In any other case, move the circle in the initial direction
      circle.x += circle.dx;
      circle.y += circle.dy;
      //Move the circle by redrawing them over and over inside the animation
      drawCircles(circle);
    });
  }

  //Function that makes the canvas always fullscreen
  //We will make it a bit larger than the screen size
  function resizeCanvas() {
    canvas.width = window.innerWidth * 1.5;
    canvas.height = window.innerHeight * 1.5;
    initCircles();
  }

  //Make canvas full width on page load
  resizeCanvas();

  //Make canvas full width every time in the screeen is resized
  window.addEventListener('resize', resizeCanvas);

  //Create the circle data on the page load
  initCircles();

  //Run the animation on page load
  animate();
}
