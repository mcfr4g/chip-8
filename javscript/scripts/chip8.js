import Renderer from './renderer.js';
import Keyboard from './keyboard.js';
import Speaker from "./speaker.js";
import CPU from "./cpu.js";




// One-liner to resume playback when user interacted with the page.
document.querySelector('button').addEventListener('click', function() {
    let loop;

    let fps = 60, fpsInterval, startTime, now, then, elapsed;
    const renderer = new Renderer(10);
    const keyboard = new Keyboard();
    const speaker = new Speaker();
    const cpu = new CPU(renderer, keyboard, speaker);

    function init() {


        fpsInterval = 1000 / fps;
        then = Date.now();

        startTime = then;

        cpu.loadSpritesIntoMemory();
        //cpu.loadRom('Pong (1 player)');
        cpu.loadRom('15 Puzzle [Roger Ivie].ch8');
        //cpu.loadRom('test_opcode');
        console.log('Loop1');
        loop = requestAnimationFrame(step);

    }

    function step() {
        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {
            console.log('tick');
            cpu.cycle(); // NEW
        }

        loop = requestAnimationFrame(step);

    }

    init();

});
