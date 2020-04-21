var myCanvas = document.getElementById('canvas')
var contex = myCanvas.getContext('2d');
myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

function draw() {
// tempat sampah 1
// handle tutup sampah 1
var panjangPP3 = 23;
var tinggiPP3 = 18;
contex.fillStyle='black';
contex.fillRect(47, 302, panjangPP3, tinggiPP3);

// tutup sampah 1
var panjangPP2 = 100;
var tinggiPP2 = 30;
contex.fillStyle='orange';
contex.fillRect(10, 320, panjangPP2, tinggiPP2);

// tong sampah 1
var panjangPP1 = 100;
var tinggiPP1 = 150;
contex.fillStyle='yellow';
contex.fillRect(10, 350, panjangPP1, tinggiPP1);

// handle tutup sampah 1 copy
contex.fillStyle='black';
contex.fillRect(185, 318, panjangPP3, tinggiPP3);

// tutup sampah 2 copy
// draw orange rect, membuat badan tempat sampah menggunakan rectangle
var panjangPP4 = 81;
var tinggiPP4 = 15;
contex.fillStyle='orange';
contex.fillRect(150, 335, panjangPP4, tinggiPP4)

// membuat tong sampah 3
// draw yellow rect, dibawah ini merupan cara membuat badan tempat sampah 3 menggunakan rectangle
contex.fillStyle='yellow';
contex.fillRect(350, 350, panjangPP1, tinggiPP1);

// tong sampah 2
// draw yellow rect
contex.fillStyle='yellow';
contex.fillRect(150, 350, panjangPP1, tinggiPP1);

contex.translate(313,-66); //translate to rectangle center
                            // x = x + 0.5 * width, y = y + 0.5* height
contex.rotate((Math.PI/100) * 25); //rotate
contex.translate(-150, -80); //translate back

// tutup sampah 2
// draw orange rect
var panjangPP6 = 120;
var tinggiPP6 = 20;
contex.fillStyle='orange';
contex.fillRect(280, 400, panjangPP6, tinggiPP6)


// handle tutup sampah 2
//draw black rect
contex.fillStyle='black';
contex.fillRect(320, 382, panjangPP3, tinggiPP3);


// 3
contex.translate(313,-70); //translate to rectangle center
                            // x = x + 0.5 * width, y = y + 0.5* height
contex.rotate(Math.PI/4); //rotate
contex.translate(-99, -330); //translate back

// handle tutup sampah
//draw black rect
contex.fillStyle='black';
contex.fillRect(423, 597, panjangPP3, tinggiPP3);

// tutup sampah 3 
// draw orange rect, 
var panjangPP5 = 72;
var tinggiPP5 = 15;
contex.fillStyle='orange';
contex.fillRect(399, 609, panjangPP5, tinggiPP5)

// handle tutup sampah 3
//draw black rect, dibawah ini merupan cara membuat tutup tempat sampah 3 menggunakan rectangle
contex.fillStyle='black';
contex.fillRect(445, 397, panjangPP3, tinggiPP3);

// tutup sampah 3
// draw orange rect, dibawah ini merupan cara membuat tutup tempat sampah 3 menggunakan rectangle
contex.fillStyle='orange';
contex.fillRect(406, 415, panjangPP2, tinggiPP2)


}
draw();
