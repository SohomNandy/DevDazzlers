let scrl = document.querySelector(".sec1-cont");
let bkbtn = document.getElementById("prevbtn");
let nxtbtn = document.getElementById("nextbtn");

// scrl.addEventListener("wheel", (evt) =>
// {
//     evt.preventDefault();
//     scrl.scrollLeft += evt.deltaY;
// }
// );

bkbtn.addEventListener("click", () => {
    scrl.style.scrollBehavior = "smooth";
    scrl.scrollLeft= 400;
}
);
nxtbtn.addEventListener("click", () => {
    scrl.style.scrollBehavior = "smooth";
    scrl.scrollLeft += 500;
}
);

// document.body.style.backgroundColor = "red";

let filter = document.getElementById('flt');
let fltbox = document.getElementById('fltsc');
let cross = document.getElementById('fltcross');

fltbox.style.display = 'none';

filter.addEventListener('click', () => {
    fltbox.style.display = "flex";
    filter.style.display = 'none';
    cross.style.display = "flex";
}
)

cross.addEventListener('click', () => {
    fltbox.style.display = "none";
    filter.style.display = 'flex';
    cross.style.display = "none";
}
)

let srchicn = document.getElementById('soc');
let srchbox = document.getElementById('sch');
let crs2 = document.getElementById('srchcross');


srchicn.addEventListener('click', () => {
    srchbox.style.display = "flex";
    srchicn.style.display = "none";
    crs2.style.display = "flex";
    document.getElementById('srach').style.display = "block";
}
)

crs2.addEventListener('click', () => {
    srchbox.style.display = "none";
    srchicn.style.display = "flex";
    crs2.style.display = "none";
    document.getElementById('srach').style.display = "none";
}
)
let srchicn2 = document.getElementById('soc2');
let srchbox2 = document.getElementById('sch2');
let crs22 = document.getElementById('srchcross2');
let srchmain = document.getElementById('srach2');
srchicn2.addEventListener('click', () => {
    srchbox2.style.display = "flex";
    srchicn2.style.display = "none";
    crs22.style.display = "flex";
    srchmain.style.display = "flex";
}
)

crs22.addEventListener('click', () => {
    srchbox2.style.display = "none";
    srchicn2.style.display = "flex";
    crs22.style.display = "none";
    srchmain.style.display = "none";
}
)

let bangur = document.getElementById('bangur');
let bangur2 = document.getElementById('bangur2');
let bangurcross = document.getElementById('bangcrs');
let bangurcross2 = document.getElementById('bangcrs2');
bangur.addEventListener('click', () => {
    document.getElementById('si3').style.display = "grid";
    bangurcross.style.display = "block";
    document.getElementById('se1').style.display = "none";
    document.getElementById('se2').style.display = "none";
    document.getElementById('buit').style.display = "none";
    document.getElementById('topc').style.display = "none";
    document.getElementById('hu2').style.display = "none";
})
bangur2.addEventListener('click', () => {
    document.getElementById('si3').style.display = "flex";
    bangurcross2.style.display = "block";
    document.getElementById('se1').style.display = "none";
    document.getElementById('se2').style.display = "none";
    document.getElementById('buit').style.display = "none";
    document.getElementById('topc').style.display = "none";
    document.getElementById('hu2').style.display = "none";
})

bangurcross.addEventListener('click', () => {
    document.getElementById('si3').style.display = "none";
    bangurcross.style.display = "none";
    document.getElementById('se1').style.display = "flex";
    document.getElementById('se2').style.display = "grid";
    document.getElementById('buit').style.display = "flex";
    document.getElementById('topc').style.display = "flex";
    document.getElementById('hu2').style.display = "flex";
})
bangurcross2.addEventListener('click', () => {
    document.getElementById('si3').style.display = "none";
    bangurcross2.style.display = "none";
    document.getElementById('se1').style.display = "flex";
    document.getElementById('se2').style.display = "flex";
    document.getElementById('buit').style.display = "flex";
    document.getElementById('topc').style.display = "flex";
    document.getElementById('hu2').style.display = "flex";
})

let sskm = document.getElementById('sskm');
let sskmscross = document.getElementById('sskcrs');
let sskm2 = document.getElementById('sskm2');
let sskmscross2 = document.getElementById('sskcrs2');

sskm.addEventListener('click', () => {
    document.getElementById('si4').style.display = "grid";
    sskmscross.style.display = "block";
    document.getElementById('se1').style.display = "none";
    document.getElementById('se2').style.display = "none";
    document.getElementById('buit').style.display = "none";
    document.getElementById('topc').style.display = "none";
    document.getElementById('hu2').style.display = "none";
})
sskm2.addEventListener('click', () => {
    document.getElementById('si4').style.display = "flex";
    sskmscross2.style.display = "block";
    document.getElementById('se1').style.display = "none";
    document.getElementById('se2').style.display = "none";
    document.getElementById('buit').style.display = "none";
    document.getElementById('topc').style.display = "none";
    document.getElementById('hu2').style.display = "none";
})

sskmscross.addEventListener('click', () => {
    document.getElementById('si4').style.display = "none";
    sskmscross.style.display = "none";
    document.getElementById('se1').style.display = "flex";
    document.getElementById('se2').style.display = "grid";
    document.getElementById('buit').style.display = "flex";
    document.getElementById('topc').style.display = "flex";
    document.getElementById('hu2').style.display = "flex";
})
sskmscross2.addEventListener('click', () => {
    document.getElementById('si4').style.display = "none";
    sskmscross2.style.display = "none";
    document.getElementById('se1').style.display = "flex";
    document.getElementById('se2').style.display = "flex";
    document.getElementById('buit').style.display = "flex";
    document.getElementById('topc').style.display = "flex";
    document.getElementById('hu2').style.display = "flex";
})

function prld() {
    document.getElementById("preloader").style.display = "flex";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("se1").style.display = "none";
    document.getElementById("tuxt").style.display = "none";
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

document.querySelector('.hami').style.display = 'none';

ham.addEventListener('click', () => {
    document.querySelector('.hami').style.display = 'flex';
})

let hamcross = document.getElementById('hmcr');

hamcross.addEventListener('click', () => {
    document.querySelector('.hami').style.display = 'none';
})

let cart1 = document.getElementById('mancart');
let cart2 = document.getElementById('mancart2');

let but1 = document.querySelector('.my');
let but2 = document.querySelector('.my2');
let but3 = document.getElementById('mytw');

let cartcross1 = document.getElementById('cartcross1');
let cartcross2 = document.getElementById('cartcross2');

but1.addEventListener('click', () => {
    cart1.style.display = 'flex';
})

but2.addEventListener('click', () => {
    cart2.style.display = 'flex';
})
but3.addEventListener('click', () => {
    cart2.style.display = 'flex';
})

cartcross1.addEventListener('click', () => {
    cart1.style.display = 'none';
})
cartcross2.addEventListener('click', () => {
    cart2.style.display = 'none';
})


let srchiconi = document.getElementById('srach');

srchiconi.addEventListener('click', () => {
    var search = document.querySelector('.searchbar').value;
    console.log(search);
    if (search == "bangur") {
        document.getElementById('si3').style.display = "grid";
        document.getElementById('se1').style.display = "none";
        document.getElementById('se2').style.display = "none";
        document.getElementById('buit').style.display = "none";
        document.getElementById('topc').style.display = "none";
        document.getElementById('hu2').style.display = "none";
        bangurcross.style.display = "block";
    }
    if (search == "sskm") {
        document.getElementById('si4').style.display = "grid";
        document.getElementById('se1').style.display = "none";
        document.getElementById('se2').style.display = "none";
        document.getElementById('buit').style.display = "none";
        document.getElementById('topc').style.display = "none";
        document.getElementById('hu2').style.display = "none";
        sskmscross.style.display = "block";
    }
})

let srchagain = document.getElementById('srach2');

srchagain.addEventListener('click', ()=>
{
    var val = document.querySelector('#sch2').value;
    console.log(val);
    if(val == "bangur")
    {
        document.getElementById('si3').style.display = "flex";
        document.getElementById('se1').style.display = "none";
        document.getElementById('se2').style.display = "none";
        document.getElementById('buit').style.display = "none";
        document.getElementById('topc').style.display = "none";
        document.getElementById('hu2').style.display = "none";
        document.getElementById('si4').style.display = "none";
        bangurcross2.style.display = "block";
    }
    if(val == "sskm")
    {
        document.getElementById('si4').style.display = "flex";
        document.getElementById('si3').style.display = "none";
        document.getElementById('se1').style.display = "none";
        document.getElementById('se2').style.display = "none";
        document.getElementById('buit').style.display = "none";
        document.getElementById('topc').style.display = "none";
        document.getElementById('hu2').style.display = "none";
        sskmscross2.style.display = "block";
    }
})


