const card = document.querySelector(".divTableCell");
const card_d = document.getElementById("dimond");
const card_c = document.getElementById("club");
const card_h = document.getElementById("heart");
const card_s = document.getElementById("spade");

const card_6d = document.getElementById("6d");
const card_7d = document.getElementById("7d");
const card_8d = document.getElementById("8d");
const card_9d = document.getElementById("9d");
const card_10d = document.getElementById("10d");
const card_jd = document.getElementById("jd");
const card_qd = document.getElementById("qd");
const card_kd = document.getElementById("kd");
const card_ad = document.getElementById("ad");

const card_6c = document.getElementById("6c");
const card_7c = document.getElementById("7c");
const card_8c = document.getElementById("8c");
const card_9c = document.getElementById("9c");
const card_10c = document.getElementById("10c");
const card_jc = document.getElementById("jc");
const card_qc = document.getElementById("qc");
const card_kc = document.getElementById("kc");
const card_ac = document.getElementById("ac");

const card_6h = document.getElementById("6h");
const card_7h = document.getElementById("7h");
const card_8h = document.getElementById("8h");
const card_9h = document.getElementById("9h");
const card_10h = document.getElementById("10h");
const card_jh = document.getElementById("jh");
const card_qh = document.getElementById("qh");
const card_kh = document.getElementById("kh");
const card_ah = document.getElementById("ah");

const card_6s = document.getElementById("6s");
const card_7s = document.getElementById("7s");
const card_8s = document.getElementById("8s");
const card_9s = document.getElementById("9s");
const card_10s = document.getElementById("10s");
const card_js = document.getElementById("js");
const card_qs = document.getElementById("qs");
const card_ks = document.getElementById("ks");
const card_as = document.getElementById("as");

const spec_6d = document.getElementById("s-6d");
const spec_7d = document.getElementById("s-7d");
const spec_8d = document.getElementById("s-8d");
const spec_9d = document.getElementById("s-9d");
const spec_10d = document.getElementById("s-10d");
const spec_jd = document.getElementById("s-jd");
const spec_qd = document.getElementById("s-qd");
const spec_kd = document.getElementById("s-kd");
const spec_ad = document.getElementById("s-ad");

const spec_6c = document.getElementById("s-6c");
const spec_7c = document.getElementById("s-7c");
const spec_8c = document.getElementById("s-8c");
const spec_9c = document.getElementById("s-9c");
const spec_10c = document.getElementById("s-10c");
const spec_jc = document.getElementById("s-jc");
const spec_qc = document.getElementById("s-qc");
const spec_kc = document.getElementById("s-kc");
const spec_ac = document.getElementById("s-ac");

const spec_6h = document.getElementById("s-6h");
const spec_7h = document.getElementById("s-7h");
const spec_8h = document.getElementById("s-8h");
const spec_9h = document.getElementById("s-9h");
const spec_10h = document.getElementById("s-10h");
const spec_jh = document.getElementById("s-jh");
const spec_qh = document.getElementById("s-qh");
const spec_kh = document.getElementById("s-kh");
const spec_ah = document.getElementById("s-ah");

const spec_6s = document.getElementById("s-6s");
const spec_7s = document.getElementById("s-7s");
const spec_8s = document.getElementById("s-8s");
const spec_9s = document.getElementById("s-9s");
const spec_10s = document.getElementById("s-10s");
const spec_js = document.getElementById("s-js");
const spec_qs = document.getElementById("s-qs");
const spec_ks = document.getElementById("s-ks");
const spec_as = document.getElementById("s-as");

const player_1 = document.getElementById("p1");
const player_2 = document.getElementById("p2");
const player_3 = document.getElementById("p3");
const player_4 = document.getElementById("p4");
const player_5 = document.getElementById("p5");
const player_6 = document.getElementById("p6");
const player_0 = document.getElementById("p0");

const numb_1 = document.getElementById("n-p1");
const numb_2 = document.getElementById("n-p2");
const numb_3 = document.getElementById("n-p3");
const numb_4 = document.getElementById("n-p4");
const numb_5 = document.getElementById("n-p5");
const numb_6 = document.getElementById("n-p6");
const numb_0 = document.getElementById("n-p0");

var current_player = 0;

var nc_1 = 0;
var nc_2 = 0;
var nc_3 = 0;
var nc_4 = 0;
var nc_5 = 0;
var nc_6 = 0;
var nc_0 = 0;


function removeTrump(){
    card_d.classList.remove('trump-card');
    card_c.classList.remove('trump-card');
    card_h.classList.remove('trump-card');
    card_s.classList.remove('trump-card');
}
function checkTrump(name){
    removeTrump();
    name.classList.add('trump-card');
}

function removeCardPlayer(cardName, specName){
    cardName.classList.remove('player-1-check');
    cardName.classList.remove('player-2-check');
    cardName.classList.remove('player-3-check');
    cardName.classList.remove('player-4-check');
    cardName.classList.remove('player-5-check');
    cardName.classList.remove('player-6-check');

    specName.classList.remove('player-1-special');
    specName.classList.remove('player-2-special');
    specName.classList.remove('player-3-special');
    specName.classList.remove('player-4-special');
    specName.classList.remove('player-5-special');
    specName.classList.remove('player-6-special');

    specName.innerHTML = "";
}


function checkCard(cardName, specName){
    if(current_player == 7){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('hide');
        nc_0++;
        numb_0.innerHTML = nc_0;
    }
    if(current_player == 1){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-1-check');
        specName.classList.add('player-1-special');
        specName.innerHTML = "Y";
    }
    if(current_player == 2){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-2-check');
        specName.classList.add('player-2-special');
        specName.innerHTML = "1";
    }
    if(current_player == 3){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-3-check');
        specName.classList.add('player-3-special');
        specName.innerHTML = "2";
    }
    if(current_player == 4){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-4-check');
        specName.classList.add('player-4-special');
        specName.innerHTML = "3";
    }
    if(current_player == 5){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-5-check');
        specName.classList.add('player-5-special');
        specName.innerHTML = "4";
    }
    if(current_player == 6){
        removeCardPlayer(cardName, specName);
        cardName.classList.add('player-6-check');
        specName.classList.add('player-6-special');
        specName.innerHTML = "5";
    }
}

function cardsEvents(){
    card_d.addEventListener('click', function(){checkTrump(card_d);});
    card_c.addEventListener('click', function(){checkTrump(card_c);});
    card_h.addEventListener('click', function(){checkTrump(card_h);});
    card_s.addEventListener('click', function(){checkTrump(card_s);});

    card_6d.addEventListener('click', function(){checkCard(card_6d, spec_6d);});
    card_7d.addEventListener('click', function(){checkCard(card_7d, spec_7d);});
    card_8d.addEventListener('click', function(){checkCard(card_8d, spec_8d);});
    card_9d.addEventListener('click', function(){checkCard(card_9d, spec_9d);});
    card_10d.addEventListener('click', function(){checkCard(card_10d, spec_10d);});
    card_jd.addEventListener('click', function(){checkCard(card_jd, spec_jd);});
    card_qd.addEventListener('click', function(){checkCard(card_qd, spec_qd);});
    card_kd.addEventListener('click', function(){checkCard(card_kd, spec_kd);});
    card_ad.addEventListener('click', function(){checkCard(card_ad, spec_ad);});

    card_6c.addEventListener('click', function(){checkCard(card_6c, spec_6c);});
    card_7c.addEventListener('click', function(){checkCard(card_7c, spec_7c);});
    card_8c.addEventListener('click', function(){checkCard(card_8c, spec_8c);});
    card_9c.addEventListener('click', function(){checkCard(card_9c, spec_9c);});
    card_10c.addEventListener('click', function(){checkCard(card_10c, spec_10c);});
    card_jc.addEventListener('click', function(){checkCard(card_jc, spec_jc);});
    card_qc.addEventListener('click', function(){checkCard(card_qc, spec_qc);});
    card_kc.addEventListener('click', function(){checkCard(card_kc, spec_kc);});
    card_ac.addEventListener('click', function(){checkCard(card_ac, spec_ac);});

    card_6h.addEventListener('click', function(){checkCard(card_6h, spec_6h);});
    card_7h.addEventListener('click', function(){checkCard(card_7h, spec_7h);});
    card_8h.addEventListener('click', function(){checkCard(card_8h, spec_8h);});
    card_9h.addEventListener('click', function(){checkCard(card_9h, spec_9h);});
    card_10h.addEventListener('click', function(){checkCard(card_10h, spec_10h);});
    card_jh.addEventListener('click', function(){checkCard(card_jh, spec_jh);});
    card_qh.addEventListener('click', function(){checkCard(card_qh, spec_qh);});
    card_kh.addEventListener('click', function(){checkCard(card_kh, spec_kh);});
    card_ah.addEventListener('click', function(){checkCard(card_ah, spec_ah);});

    card_6s.addEventListener('click', function(){checkCard(card_6s, spec_6s);});
    card_7s.addEventListener('click', function(){checkCard(card_7s, spec_7s);});
    card_8s.addEventListener('click', function(){checkCard(card_8s, spec_8s);});
    card_9s.addEventListener('click', function(){checkCard(card_9s, spec_9s);});
    card_10s.addEventListener('click', function(){checkCard(card_10s, spec_10s);});
    card_js.addEventListener('click', function(){checkCard(card_js, spec_js);});
    card_qs.addEventListener('click', function(){checkCard(card_qs, spec_qs);});
    card_ks.addEventListener('click', function(){checkCard(card_ks, spec_ks);});
    card_as.addEventListener('click', function(){checkCard(card_as, spec_as);});
}


function removePlayer(){
    player_0.classList.remove('p0-check');
    player_1.classList.remove('p1-check');
    player_2.classList.remove('p2-check');
    player_3.classList.remove('p3-check');
    player_4.classList.remove('p4-check');
    player_5.classList.remove('p5-check');
    player_6.classList.remove('p6-check');
}
function checkPlayer(name){
    removePlayer();
    if(name==player_0){
        current_player = 7;
        name.classList.add('p0-check');
    }
    if(name==player_1){
        current_player = 1;
        name.classList.add('p1-check');
    }
    if(name==player_2){
        current_player = 2;
        name.classList.add('p2-check');
    }
    if(name==player_3){
        current_player = 3;
        name.classList.add('p3-check');
    }
    if(name==player_4){
        current_player = 4;
        name.classList.add('p4-check');
    }
    if(name==player_5){
        current_player = 5;
        name.classList.add('p5-check');
    }
    if(name==player_6){
        current_player = 6;
        name.classList.add('p6-check');
    }
}

function playersEvents(){
    player_1.addEventListener('click', function(){checkPlayer(player_1);});
    player_2.addEventListener('click', function(){checkPlayer(player_2);});
    player_3.addEventListener('click', function(){checkPlayer(player_3);});
    player_4.addEventListener('click', function(){checkPlayer(player_4);});
    player_5.addEventListener('click', function(){checkPlayer(player_5);});
    player_6.addEventListener('click', function(){checkPlayer(player_6);});
    player_0.addEventListener('click', function(){checkPlayer(player_0);});
    
}

function main() {
    cardsEvents();
    playersEvents();
}

main();


