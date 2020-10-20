//takes out a random element(image) from bigSize array; source=https://codepen.io/omascaros/pen/CBapm
var random= Math.floor(Math.random() * 14) + 0;
var bigSize = ["url('./photos/image1.jpg')",
               "url('./photos/image2.jpg')",
               "url('./photos/image3.jpg')",
               "url('./photos/image4.jpg')",
               "url('./photos/image5.jpg')",
               "url('./photos/image6.jpg')",
               "url('./photos/image7.jpg')",
               "url('./photos/image8.jpg')",
               "url('./photos/image9.jpg')",
               "url('./photos/image10.jpg')",
               "url('./photos/image11.jpg')",
               "url('./photos/image12.jpg')",
               "url('./photos/image13.jpg')",
               "url('./photos/image14.jpg')"];
document.getElementById("bg").style.backgroundImage=bigSize[random];