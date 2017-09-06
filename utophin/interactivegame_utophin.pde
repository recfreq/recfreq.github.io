//Utrophin: an interactive experience: web version.
//Changed audio input and output, image input, font input,
//decreased size of everything by 1/2 for web presentation.
//Story located as index to img: ind*2 and ind*2+1 as inlays.
//1
//2 3
//4 5 6 7
//8 9 10 11 12 13 14 15
//16 17 18
/* @pjs preload="icon.gif", "utrophin0.jpg","utrophin1.jpg","utrophin2.jpg", "utrophin3.jpg","utrophin4.jpg","utrophin5.jpg", "utrophin6.jpg","utrophin7.jpg","utrophin8.jpg", "utrophin9.jpg","utrophin10.jpg","utrophin11.jpg", "utrophin12.jpg","utrophin13.jpg","utrophin14.jpg", "utrophin15.jpg","utrophin16.jpg","utrophin17.jpg", "utrophin18.jpg"; */
/* @pjs font="BRITANIC.TTF","corbel.ttf"; */

PImage[] img = new PImage[19];
int[][] inlay = { {150, 175, 350, 125},
                  {125, 350, 325, 200},
                  {125, 200, 350, 350},
                  {50, 350, 325, 275},
                  {350, 325, 75, 250},
                  {100, 250, 350, 175},
                  {75, 325, 350, 250} };
PFont[] fonts = new PFont[2];
Audio sounds = new Audio();
PImage icon = new PImage();
int curr = 0;   //Current place in story as index to img.
int inlayW = 100;
int x = 0, y = 0;
int starttime = 0, loadtime = 7000;

String[] msg = {"click on mouse to continue...",
                "an outsider arrives on earth to explore its inhabitants\nand comprehend herself, where should she go next?",
                "continuing her mission, at the border of sea and land,\nshall she dive into ocean, or explore earth's beaches?",
                "continuing her mission, at the border of moutain and\ncity, shall she visit the forest fields or the metropolis?",
                "the ocean of earth brings her great joy but she is also\noverwhelmed by unending mass, shall she go deeper?",
                "the beach is a sight of natural beauty, but to grasp it all\nshall she talk to god singer of reggae or the holy cow?",
                "the fields of tea and trees undulate amongst creatures\nof earth, shall she talk to a noble lady or wild children?",
                "the city contains contraptions of capital which she\ndoesn't understand, ask stuffed animal or the couple?",
                "at the deepest end she expected to find lifeless solitude\nbut instead visions of the planet come to her as dreams.",
                "the corals have more life even than land, but they all tell\nher the same thing: planet is dying, return to your ship.",
                "holy cow espouses Hindu wisdom: you are searching for\nyourself, which is the world, but your world is not here.",
                "Marley sings: so you think you've found the solution but\nit's just another illusion... so much trouble in the world.",
                "wise lady replies: what you see is not the world but wor-\nld through eyes of your ship to which you must return.",
                "the children and the Mana tree says: the world regrows\nbut you can only see it from above, back on your ship.",
                "you meet fighting mascots, Kumamon the bear replies:\nthis world is is inhumane, and not good enough for you.",
                "the couple answers: we found truth in each other, but\nyou only find that with your loved one back on your ship.",
                "finally the Earth speaks: I am the water and source of\nlife and you find in me all the different modes of being.",
                "congratulations, the outsider came to experience inside\nearth, the aura that connects one creature to another.",
                "the outsider returns to her ship, but realizes: what she\nthought she had she never had, but simply back in time."
              };

void setup() {
  size(500, 500);
  fonts[0] = createFont("BRITANIC.TTF", 40);
  fonts[1] = createFont("corbel.ttf", 18);
  for (int k = 0; k < img.length; k++) {
    img[k] = loadImage("utrophin" + k + ".jpg");
  }

  sounds.setAttribute("src", "utrophin0.mp3");
  sounds.addEventListener("ended",repeat);
  sounds.play();

  icon = loadImage("icon.gif");
  cursor(icon);
  starttime = millis();
}

void draw() {
  if (curr == 0) {   //intro screen.
    image(img[curr], 0, 0, width, height);
    fill(126); textFont(fonts[0]);
    text("UTOPHIN", width/2-90, height-160);
    fill(255); textFont(fonts[1]);
    if (millis() - starttime < loadtime) {
      text("please wait...        ray lc  |  music by amachamusic", 50, height-50);
    } else {
      text(msg[0], 50, height-50);
    }      
  } else if (curr < 8) {
    renderCurr(curr, inlay);
  } else if (curr == 16) {
    image(img[curr], 0, 0, width, height);
    //text.
    fill(40, 65, 165); noStroke();
    rect(40, 40, width-80, 50);
    fill(255);
    text(msg[curr], 50, 60);
    starttime = millis();   //record time so next screen can finish
  } else if (curr == 17) {   //finish game
    image(img[curr], 0, 0, width, height);
    //text.
    fill(40, 65, 165); noStroke();
    rect(40, 40, width-80, 50);
    fill(255);
    text(msg[curr], 50, 60);
    fill(255); textFont(fonts[1]);
    if (millis() - starttime < loadtime) {
      text("please wait...        ray lc  |  music by amachamusic", 50, height-50);
    } else {
      text("browser go back to exit game.", 50, height-50);
    }
  } else {   //continue.
    image(img[curr], 0, 0, width, height);
    //text.
    fill(40, 65, 165); noStroke();
    rect(40, 40, width-80, 50);
    fill(255);
    text(msg[curr], 50, 60);
    fill(126); textFont(fonts[1]);
    text(msg[0], 50, height-50);
  }
}

void renderCurr(int i, int[][] inlay) {
  //image and inlays.
  image(img[i], 0, 0, width, height);
  image(img[i*2], inlay[i-1][0], inlay[i-1][1], inlayW, inlayW);
  image(img[i*2+1], inlay[i-1][2], inlay[i-1][3], inlayW, inlayW);

  //text.
  fill(40, 65, 165); noStroke();
  rect(40, 40, width-80, 50);
  fill(255);
  text(msg[i], 50, 60);
  
  //responsive inlay boundary.
  noFill();
  x = mouseX; y = mouseY;
  if (x > inlay[i-1][0] && x < inlay[i-1][0]+inlayW
  && y > inlay[i-1][1] && y < inlay[i-1][1]+inlayW) {
    strokeWeight(6);
    stroke(#E08139); rect(inlay[i-1][0], inlay[i-1][1], inlayW, inlayW);
    strokeWeight(3);
    stroke(#39E099); rect(inlay[i-1][2], inlay[i-1][3], inlayW, inlayW);
  } else if (x > inlay[i-1][2] && x < inlay[i-1][2]+inlayW
  && y > inlay[i-1][3] && y < inlay[i-1][3]+inlayW) {
    strokeWeight(3);
    stroke(#E08139); rect(inlay[i-1][0], inlay[i-1][1], inlayW, inlayW);
    strokeWeight(6);
    stroke(#39E099); rect(inlay[i-1][2], inlay[i-1][3], inlayW, inlayW);  
  } else {
    strokeWeight(3);
    stroke(#E08139); rect(inlay[i-1][0], inlay[i-1][1], inlayW, inlayW);
    stroke(#39E099); rect(inlay[i-1][2], inlay[i-1][3], inlayW, inlayW);
  }
}

void mouseClicked() {
  if (curr == 0) {
    if (millis() - starttime > loadtime) {
      curr++;

      sounds.pause();
      sounds.setAttribute("src", "utrophin1.mp3");
      sounds.load();
      sounds.play();
    }
  } else if (curr < 8) {
    x = mouseX; y = mouseY;
    if (x > inlay[curr-1][0] && x < inlay[curr-1][0]+inlayW
    && y > inlay[curr-1][1] && y < inlay[curr-1][1]+inlayW) {
      curr = curr*2;
    } else if (x > inlay[curr-1][2] && x < inlay[curr-1][2]+inlayW
    && y > inlay[curr-1][3] && y < inlay[curr-1][3]+inlayW) {
      curr = curr*2+1;
    }
  } else if (curr == 8) {
    curr = 16;

    sounds.pause();
    sounds.setAttribute("src", "utrophin3.mp3");
    sounds.load();
    sounds.play();
  } else if (curr > 8 && curr < 16) {
    curr = 18;

    sounds.pause();
    sounds.setAttribute("src", "utrophin2.mp3");
    sounds.load();
    sounds.play();
  } else if (curr == 16) {
    curr = 17;
  } else if (curr == 17) {
    if (millis() - starttime > loadtime) {
      exit();
    }
  } else {   //if curr is 18, start over.
    curr = 0;
  }
}

void repeat(){
  sounds.play();
}