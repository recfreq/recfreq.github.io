//https://github.com/robin-dela/hover-effect
new hoverEffect({
    parent: document.querySelector('#graphic'),
    intensity: 0.8,  //default 1
    image1: './media/figs_contents02draw.png',
    image2: './media/figs_contents04network.png',
    displacementImage: './media/figs_contents04heightmap.png',
    speedIn: 1.5,  //default 1.6
    speedOut: 2.5,  //default 1.2
    easing: 'Expo.power4',  //default Expo.easeOut
    angle: Math.PI/4,  //default pi/4
    imagesRatio: 526 / 960  //default to square 1
});