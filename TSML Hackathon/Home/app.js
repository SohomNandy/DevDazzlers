var m = 0;
var images = [];
var tme = 3000;

// images list
images[0] = 'nurse1.png';
images[1] = 'nurse5.jpeg';
images[2] = 'nurse6.jpeg';

// change image
// var sld = document.getElementsByName(dls);
function changeimg() 
{

    document.deles.src = images[m];
    // sld.src = `img${m}.jpg`;
    // sld.src = images[m];
    if (m < images.length - 1) {
        m++;
    }
    else {
        m = 0;
    }
    setTimeout(changeimg, tme);
}

window.onload = changeimg;


let ham = document.getElementById('ham');
let crossx = document.getElementById('cross');
let nv = document.getElementById('nv');
ham.addEventListener('click', ()=>
{
    nv.style.display = 'flex';
    // document.querySelector('.nav-items').style.flexDirection = 'column';
    // document.getElementById('ai-1').style.display = 'none';
    ham.style.display = 'none';
    crossx.style.display = 'flex';
})


crossx.addEventListener('click', ()=>
{
    nv.style.display = 'none';
    // document.querySelector('.nav-items').style.flexDirection = 'column';
    // document.getElementById('ai-1').style.display = 'flex';
    ham.style.display = 'flex';
    crossx.style.display = 'none';
})
