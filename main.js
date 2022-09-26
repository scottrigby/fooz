const sfx = [
    new Audio('sfx/0_mmm.wav'),
    new Audio('sfx/1_hit_it.wav'),
    new Audio('sfx/2_get_it.wav'),
    new Audio('sfx/3_ow.wav'),
    new Audio('sfx/4_show_them_girl.wav'),
    new Audio('sfx/5_boom_boom.wav'),
    new Audio('sfx/6_ba_ba.wav'),
    new Audio('sfx/7_ba_ba.wav'),
    new Audio('sfx/8_krrrrrr.wav'),
];

function main() {
    const buttons = document.getElementsByTagName("button");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            sfx[i].play();
        });
    }
}

// Wait for page to load before manipulating DOM
window.addEventListener('load',() => {
    main();
});