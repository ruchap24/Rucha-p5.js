function setup() {
  createCanvas(800, 400);
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  // Animated gradient background
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(255, 100, 100), color(100, 100, 255), inter);
    stroke(c);
    line(0, i, width, i);
  }

  // Add some moving ellipses for a dynamic effect
  for (let i = 0; i < 10; i++) {
    fill(random(255), random(255), random(255), 100);
    ellipse(random(width), random(height), random(20, 50));
  }

  // Display the name "Rucha" with a shadow effect
  fill(255, 204, 0);
  textSize(80);
  text("Rucha", width / 2 + 3, height / 2 + 3); // Shadow
  fill(0, 102, 153);
  text("Rucha", width / 2, height / 2); // Main text

}
