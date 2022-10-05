const sfxFiles = [
    'sfx/0_mmm.wav',
    'sfx/1_hit_it.wav',
    'sfx/2_get_it.wav',
    'sfx/3_ow.wav',
    'sfx/4_show_them_girl.wav',
    'sfx/5_boom_boom.wav',
    'sfx/6_ba_ba.wav',
    'sfx/7_ba_ba.wav',
    'sfx/8_krrrrrr.wav',
];

function main() {
    const buttons = document.getElementsByTagName("button");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const audio = new Audio(sfxFiles[i])
            audio.play();
        });
    }
}

// Wait for page to load before manipulating DOM
window.addEventListener('load',() => {
    main();
});