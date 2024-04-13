
// document.getElementsByClassName('sld');
var m = 0;
var images = [];
var tme = 3000;

// images list
images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpeg';
images[3] = 'img4.jpg';

// change image
// var sld = document.getElementsByName(dls);
function changeimg() {
    var lft = document.getElementById('left')
    var rght = document.getElementById('right')

    lft.addEventListener('click', (e) => {
        if (m < images.length - 1) {
            return 0;
        }
        else {
            ++m;
        }
    })
    document.deles.src = images[m];
    // sld.src = `img${m}.jpg`;
    // sld.src = images[m];
    if (m < images.length - 1) {
        m++;
    }
    else {
        m = 0;
    }
    lft.addEventListener('click', () => {
        document.deles.src = "img1.jpg";
    })
    rght.addEventListener('click', () => {
        document.deles.src = "img3.jpeg";
    })


    setTimeout(changeimg, tme);
}

window.onload = changeimg;




function myfunc() {
    document.getElementById('srch').style.display = "none";
    document.getElementById('inpix').style.display = "block";
    document.getElementById('cls').style.display = "flex";
    for (let i = 0; i < 6; i++) {
        const lb = document.getElementById('nvdi');
        lb.getElementsByClassName('nv')[i].style.display = "none";
    }
}
function myfnc2() {
    document.getElementById('inpix').style.display = "none";
    document.getElementById('cls').style.display = "none";
    document.getElementById('srch').style.display = "block";
    for (let i = 0; i < 6; i++) {
        const lb = document.getElementById('nvdi');
        lb.getElementsByClassName('nv')[i].style.display = "flex";
    }
}

function lugu() {
    document.getElementById('ok').style.display = "flex";
}

function clusu() {
    document.getElementById('ok').style.display = 'none';
}

// slideshow(f);



function prld() {
    document.getElementById("preloader").style.display = "flex";
    document.getElementById("nvdi").style.display = "none";
    document.getElementById("sc1").style.display = "none";
    document.getElementById("sc2").style.display = "none";
    document.getElementById("sc3").style.display = "none";
    document.getElementById("sc4").style.display = "none";
    document.getElementById("sc5").style.display = "none";
    document.getElementById('her1').style.display = "none";
    document.getElementById('her2').style.display = "none";
}

let myprl = setTimeout(prld, 1000);

function stp() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("sc1").style.display = "flex";
    document.getElementById("sc2").style.display = "flex";
    document.getElementById("sc3").style.display = "flex";
    document.getElementById("sc4").style.display = "flex";
    document.getElementById("sc5").style.display = "flex";
    document.getElementById("nvdi").style.display = "flex";
    document.getElementById('her1').style.display = "flex";
    document.getElementById('her2').style.display = "flex";
}

let stpr = setTimeout(stp, 7000);

let ham = document.getElementById('ham');
let hamcross = document.getElementById('hamcross');
let btn2 = document.querySelector('.butm2');
ham.addEventListener('click', ()=>
{
    ham.style.display = 'none'
    document.getElementById('nvms').style.display = 'block';
    btn2.style.display = 'flex';
})

hamcross.addEventListener('click', ()=>
{
    ham.style.display = 'flex';
    document.getElementById('nvms').style.display = 'none';
})

