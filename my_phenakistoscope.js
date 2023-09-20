const SLICE_COUNT = 8;

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("mouse", "png");
  pScope.load_image("squished", "png");
  pScope.load_image("deep", "png");
  pScope.load_image("meow", "png");
  pScope.load_image("sleepy", "png");
}

function setup_layers(pScope) {

  new PLayer(null, 249, 197, 220);  //lets us draw the whole circle background, ignoring the boundariesnew PLayer(null, 255, (x=10,y=10));  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(cat);
  layer1.mode(SWIRL(1));
  layer1.set_boundary(700, 850);

  var layer2 = new PLayer(hole)
  layer2.mode(RING);
  layer2.set_boundary(0, 500);

  var layer3 = new PLayer(mouse);
  layer3.mode(SWIRL(1));
  layer3.set_boundary(0, 500);

  var layer4 = new PLayer(calmCat)
  layer4.mode(SWIRL(1));
  layer4.set_boundary(0, 500);
}




function cat(x, y, animation, pScope) {
  var size = 2
  // Draw the cat based on its current behavior
  if (animation.frame <= 0.2) {
    angryCat(-80 * size, -85 * size, 2 * size, animation, pScope); // Adjust the size and parameters as needed
  } else {
    calmCat(-80 * size, -85 * size, 2 * size, pScope); // Adjust the size as needed
  }

}


//active mouse that runs into cat
function mouse(x, y, animation, pScope) {
  push()
  scale(0.27)
  pScope.draw_image("mouse", x, y + 100);
  pop()
}

//circles in the middle of the canvas 
function hole(x, y, animation, pScope) {
  push()
  scale(1)
  pScope.draw_image("deep", x, y, + 100);
  pop()
}

//angry cat = cat with open eyes that catches the mouse 
function angryCat(x, y, size, animation, pScope) {

  //pillow under the cat
  fill(255)
  rect(x + (-20 * size), y + (-50 * size), 500, 500, 90)

  //dots on the pillow for some texture
  fill(0)
  ellipse(x + (1 * size), y + (10 * size), (1 * size), (4 + size))
  ellipse(x + (-3 * size), y + (20 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (40 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (40 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (12 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (80 * size), y + (12 * size), (1 * size), (4 + size))
  ellipse(x + (78 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (78 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (90 * size), y + (30 * size), (1 * size), (4 + size))

  //cat body
  fill(37, 32, 32)
  rect(x + (10 * size), y + (-60 * size), 60 * size, 80 * size, 70)

  //head
  fill(37, 32, 32);
  beginShape();
  vertex(x + (16 * size), y + (1 * size));
  bezierVertex(x + (19 * size), y + (3 * size), x + (22 * size), y + (5 * size), x + (24 * size), y + (8 * size));
  bezierVertex(x + (26 * size), y + (11 * size), x + (27 * size), y + (12 * size), x + (28 * size), y + (14 * size));
  bezierVertex(x + (31 * size), y + (13 * size), x + (35 * size), y + (12 * size), x + (40 * size), y + (12 * size));
  bezierVertex(x + (45 * size), y + (12 * size), x + (49 * size), y + (13 * size), x + (52 * size), y + (14 * size));
  bezierVertex(x + (53 * size), y + (12 * size), x + (54 * size), y + (10 * size), x + (56 * size), y + (8 * size));
  bezierVertex(x + (58 * size), y + (5 * size), x + (61 * size), y + (2 * size), x + (63 * size), y + (1 * size));
  bezierVertex(x + (65 * size), y + (2 * size), x + (75 * size), y + (9 * size), x + (77 * size), y + (21 * size));
  bezierVertex(x + (78 * size), y + (26 * size), x + (77 * size), y + (30 * size), x + (76 * size), y + (33 * size));
  bezierVertex(x + (77 * size), y + (35 * size), x + (80 * size), y + (43 * size), x + (78 * size), y + (53 * size));
  bezierVertex(x + (76 * size), y + (60 * size), x + (72 * size), y + (63 * size), x + (70 * size), y + (65 * size));
  bezierVertex(x + (59 * size), y + (76 * size), x + (45 * size), y + (77 * size), x + (40 * size), y + (77 * size));
  bezierVertex(x + (38 * size), y + (77 * size), x + (22 * size), y + (76 * size), x + (11 * size), y + (66 * size));
  bezierVertex(x + (7 * size), y + (62 * size), x + (5 * size), y + (58 * size), x + (4 * size), y + (57 * size));
  bezierVertex(x + (1 * size), y + (49 * size), x + (1 * size), y + (44 * size), x + (1 * size), y + (44 * size));
  bezierVertex(x + (2 * size), y + (39 * size), x + (2 * size), y + (36 * size), x + (4 * size), y + (33 * size));
  bezierVertex(x + (3 * size), y + (30 * size), x + (2 * size), y + (26 * size), x + (3 * size), y + (21 * size));
  bezierVertex(x + (5 * size), y + (9 * size), x + (14 * size), y + (2 * size), x + (16 * size), y + (1 * size));
  endShape();

  //open eyes
  angryEyeLeft(0 + x, 0 + y, size)
  angryEyeRight(0 + x, 0 + y, size)

  //left pupil
  fill(0)
  ellipse(x + (25 * size), y + (55 * size), (6 * size), (46 + size))

  //right pupil
  ellipse(x + (55 * size), y + (55 * size), (6 * size), (46 + size))

  //left whiskers
  stroke(37, 32, 32)
  strokeWeight(2, 100)
  line(x + (10 * size), y + (60 * size), x + (-4 * size), y + (58 * size))
  line(x + (10 * size), y + (60 * size), x + (-4 * size), y + (63 * size))

  //right whiskers
  stroke(37, 32, 32)
  strokeWeight(2, 100)
  line(x + (70 * size), y + (60 * size), x + (85 * size), y + (58 * size))
  line(x + (70 * size), y + (60 * size), x + (86 * size), y + (63 * size))

  //left paw
  fill(37, 32, 32)
  rect(x + (14 * size), y + (65 * size), 55, 100, 30)
  //left claws
  stroke(255)
  line(x + (17 * size), y + (85 * size), x + (17 * size), y + (90 * size))
  line(x + (19 * size), y + (85 * size), x + (19 * size), y + (90 * size))
  line(x + (21 * size), y + (85 * size), x + (21 * size), y + (90 * size))

  //right paw
  noStroke()
  fill(37, 32, 32)
  rect(x + (48 * size), y + (66 * size), 55, 100, 30)

  //right claws
  stroke(255)
  line(x + (52 * size), y + (85 * size), x + (52 * size), y + (90 * size))
  line(x + (54 * size), y + (85 * size), x + (54 * size), y + (91 * size))
  line(x + (56 * size), y + (85 * size), x + (56 * size), y + (91 * size))

  scale(0.06)
  pScope.draw_image("squished", x + (20 * size), y + (950 * size), 100);
}

//open eyes for angry cat
function angryEyeLeft(x, y, size) {
  noStroke()
  fill(163, 222, 235)
  beginShape();
  vertex(x + (15 * size), y + (44 * size));
  bezierVertex(x + (17 * size), y + (45 * size), x + (21 * size), y + (46 * size), x + (24 * size), y + (48 * size));
  bezierVertex(x + (30 * size), y + (52 * size), x + (33 * size), y + (58 * size), x + (34 * size), y + (61 * size));
  bezierVertex(x + (33 * size), y + (61 * size), x + (28 * size), y + (64 * size), x + (22 * size), y + (61 * size));
  bezierVertex(x + (16 * size), y + (58 * size), x + (13 * size), y + (51 * size), x + (15 * size), y + (44 * size));
  endShape();
}

function angryEyeRight(x, y, size) {
  fill(163, 222, 235)
  beginShape();
  vertex(x + (46 * size), y + (61 * size));
  bezierVertex(x + (47 * size), y + (58 * size), x + (50 * size), y + (52 * size), x + (56 * size), y + (48 * size));
  bezierVertex(x + (60 * size), y + (46 * size), x + (63 * size), y + (45 * size), x + (65 * size), y + (44 * size));
  bezierVertex(x + (67 * size), y + (51 * size), x + (64 * size), y + (58 * size), x + (58 * size), y + (61 * size));
  bezierVertex(x + (53 * size), y + (64 * size), x + (47 * size), y + (61 * size), x + (46 * size), y + (61 * size));
  endShape();
}



// Calm cat changes to angry cat when mouse get closer 
function calmCat(x, y, size, pScope) {

  //pillow
  fill(255)
  rect(x + (-20 * size), y + (-50 * size), 500, 500, 90)

  //dots on the pillow
  fill(0)
  ellipse(x + (1 * size), y + (10 * size), (1 * size), (4 + size))
  ellipse(x + (-3 * size), y + (20 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (40 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (40 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (12 * size), (1 * size), (4 + size))
  ellipse(x + (-6 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (80 * size), y + (12 * size), (1 * size), (4 + size))
  ellipse(x + (78 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (78 * size), y + (1 * size), (1 * size), (4 + size))
  ellipse(x + (90 * size), y + (30 * size), (1 * size), (4 + size))

  //back paws
  fill(37, 32, 32)
  ellipse(x + (10 * size), y + (1 * size), (20 * size), (150 + size))
  ellipse(x + (70 * size), y + (1 * size), (20 * size), (150 + size))

  //body
  fill(37, 32, 32);
  ellipse(x + (40 * size), y + (1 * size), (60 * size), (200 + size))

  //head
  fill(37, 32, 32);
  beginShape();
  vertex(x + (16 * size), y + (1 * size));
  bezierVertex(x + (19 * size), y + (3 * size), x + (22 * size), y + (5 * size), x + (24 * size), y + (8 * size));
  bezierVertex(x + (27 * size), y + (11 * size), x + (28 * size), y + (14 * size), x + (29 * size), y + (16 * size));
  bezierVertex(x + (33 * size), y + (15 * size), x + (36 * size), y + (15 * size), x + (40 * size), y + (15 * size));
  bezierVertex(x + (44 * size), y + (15 * size), x + (48 * size), y + (15 * size), x + (52 * size), y + (16 * size));
  bezierVertex(x + (53 * size), y + (14 * size), x + (54 * size), y + (11 * size), x + (57 * size), y + (8 * size));
  bezierVertex(x + (59 * size), y + (5 * size), x + (62 * size), y + (3 * size), x + (64 * size), y + (1 * size));
  bezierVertex(x + (66 * size), y + (2 * size), x + (75 * size), y + (9 * size), x + (78 * size), y + (21 * size));
  bezierVertex(x + (79 * size), y + (27 * size), x + (78 * size), y + (32 * size), x + (77 * size), y + (36 * size));
  bezierVertex(x + (78 * size), y + (40 * size), x + (80 * size), y + (48 * size), x + (75 * size), y + (57 * size));
  bezierVertex(x + (67 * size), y + (73 * size), x + (45 * size), y + (74 * size), x + (40 * size), y + (74 * size));
  bezierVertex(x + (28 * size), y + (74 * size), x + (8 * size), y + (68 * size), x + (3 * size), y + (53 * size));
  bezierVertex(x + (1 * size), y + (46 * size), x + (2 * size), y + (39 * size), x + (3 * size), y + (35 * size));
  bezierVertex(x + (3 * size), y + (31 * size), x + (2 * size), y + (27 * size), x + (3 * size), y + (21 * size));
  bezierVertex(x + (6 * size), y + (9 * size), x + (15 * size), y + (2 * size), x + (16 * size), y + (1 * size));
  endShape();

  //left ear 
  fill(186, 155, 201)
  beginShape()
  vertex(x + (18 * size), y + (6 * size));
  bezierVertex(x + (19 * size), y + (8 * size), x + (21 * size), y + (9 * size), x + (22 * size), y + (11 * size));
  bezierVertex(x + (17 * size), y + (16 * size), x + (12 * size), y + (21 * size), x + (7 * size), y + (26 * size));
  bezierVertex(x + (7 * size), y + (24 * size), x + (7 * size), y + (18 * size), x + (10 * size), y + (13 * size));
  bezierVertex(x + (13 * size), y + (9 * size), x + (16 * size), y + (7 * size), x + (18 * size), y + (6 * size));
  endShape()

  //right ear
  fill(186, 155, 201)
  beginShape()
  vertex(x + (63 * size), y + (7 * size));
  bezierVertex(x + (65 * size), y + (8 * size), x + (68 * size), y + (10 * size), x + (71 * size), y + (14 * size));
  bezierVertex(x + (74 * size), y + (19 * size), x + (74 * size), y + (25 * size), x + (74 * size), y + (27 * size));
  bezierVertex(x + (69 * size), y + (22 * size), x + (64 * size), y + (17 * size), x + (59 * size), y + (12 * size));
  bezierVertex(x + (60 * size), y + (11 * size), x + (62 * size), y + (9 * size), x + (63 * size), y + (7 * size));
  endShape()

  //left whiskers
  stroke(37, 32, 32)
  strokeWeight(2, 100)
  line(x + (10 * size), y + (60 * size), x + (-4 * size), y + (58 * size))
  line(x + (10 * size), y + (60 * size), x + (-4 * size), y + (63 * size))

  //right whiskers
  stroke(37, 32, 32)
  strokeWeight(2, 100)
  line(x + (70 * size), y + (60 * size), x + (85 * size), y + (58 * size))
  line(x + (70 * size), y + (60 * size), x + (86 * size), y + (63 * size))

  //eyes
  fill(255)
  ellipse(x + (20 * size), y + (50 * size), (10 * size), (5 + size))
  ellipse(x + (50 * size), y + (50 * size), (10 * size), (5 + size))

  //right paw
  noStroke()
  fill(37, 32, 32)
  rect(x + (45 * size), y + (60 * size), 70, 70, 60)

  scale(0.18)
  //pScope.draw_image("sleepy", x + (-300 * size), y + (-20 * size),+ 100);
}